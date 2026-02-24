import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma/browser';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { EmailService } from 'src/email/email.service';
import { rentalRequestSummaryTemplate } from 'src/email/templates/request-summary.template';
import { RentalRequestEmailProduct } from 'src/email/templates/request-summary.template';
import { Timestamp } from 'rxjs';
@Injectable()
export class RequestsService {

    constructor(
        private readonly prisma : PrismaService ,
        private readonly emailService : EmailService
    ){};

    async getAllRequest(){

        const rentalRequests = await this.prisma.rentalRequest.findMany({
            include: {
                products: {
                    include: {
                        product: {
                            select: {
                                id: true,
                                name: true,
                                ratePerDay: true,
                            },
                        },
                    },
                },
                payments : {
                    select : {
                        amount : true
                    }
                }
            },
        });

        if(!rentalRequests){
            throw new NotFoundException('Request Doesnt Exist');
        }

        return rentalRequests;
    }

    async create(data: CreateRequestDto) {
    
        //Fetch products with their ratePerDay
        const productRates = await this.prisma.product.findMany({
        where: {
            id: { in: data.products.map(p => p.productId) },
        },
        select: {
            id: true,
            name : true,
            ratePerDay: true,
        },
        });

        //total days
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);
        const rentalDays = Math.ceil( (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) || 1;

        // Calculate total payment
        let totalAmount = 0;


        const productSummary = data.products.map(item => {
            const product = productRates.find(p => p.id === item.productId);

            if (!product) {
                throw new Error(`Product ${item.productId} not found`);
            }

            const subtotal = product.ratePerDay.toNumber() * item.requestedQuantity * rentalDays;

            totalAmount += subtotal;

            return {
                name: product.name,
                quantity: item.requestedQuantity,
                ratePerDay: product.ratePerDay.toNumber(),
                subtotal,
            };
        });


        // 4️⃣ Create RentalRequest + Payment in a transaction
        const rentalRequest = await this.prisma.$transaction(async (tx) => {
        
            // Create RentalRequest with products
            const createdRequest = await tx.rentalRequest.create({
                data: {
                    customerEmail: data.customerEmail,
                    startDate: start,
                    endDate: end,
                    products: {
                        create: data.products.map((p) => ({
                        productId: p.productId,
                        requestedQuantity: p.requestedQuantity,
                        })),
                    },
                },
                include: { products: true },
            });

                // Create Payment linked to RentalRequest
            await tx.payment.create({
                data: {
                    rentalRequestId: createdRequest.id,
                    amount: new Prisma.Decimal(totalAmount),
                    paymentMethod: 'CASH',
                    paymentStatus: 'PENDING',
                },
            });

            //send email
            await this.sendingEmail({
                id : createdRequest.id,
                email: data.customerEmail,
                start,
                end,
                status : 'PENDING',
                days : rentalDays,
                products : productSummary,
                total : totalAmount 
            })

                

            return createdRequest;
        });

        return rentalRequest;
    }
    
    
    async updateApproved(params : {id : string , adminId : string , returnDate : Date }){

        const {id , adminId , returnDate } = params;

        //update status to approved
        const updRequest = await this.prisma.rentalRequest.update({
            where : {id},
            data : {
                status : 'APPROVED',
                adminId : adminId,
                returnDate : new Date(returnDate)
            },
            select : {
                id : true,
                startDate : true,
                endDate : true,
                returnDate : true,
                timeReturn : true,
                products : {
                    select : {
                        requestedQuantity : true,
                        product : {
                            select : {
                                name : true
                            }
                        }
                    },
                    
                },
                payments : {
                    select : {
                        amount : true
                    }
                }

            }
        })
        //give email to the user

        return updRequest;
    }

    async updateRejected(params : {id : string , adminId : string , adminNote : string}){

        const { id , adminId , adminNote} = params;
        //update reject in database
        const updRequest = this.prisma.rentalRequest.update({
            where : {id},
            data : {
                status : 'REJECTED',
                adminNote : adminNote,
                adminId : adminId
            },
            select : {
                id : true,
                startDate : true,
                endDate : true,
                status : true,
                products : {
                    select : {
                        requestedQuantity : true,
                    },
                    include : {
                        product : {
                            select : {
                                name : true,
                                
                            }
                        }
                    }
                },
                payments : {
                    select : {
                        amount : true
                    }
                }

            }
        })


        //send email to users
    }

    
    private async sendingEmail( 
        {id , email , start , end , days , products , total , status}: 
        {id : string,email : string,start : Date, status : string,  
        end : Date,days : number,products : RentalRequestEmailProduct[],total : number
    }) : Promise<void>{
        
        const emailHtml = rentalRequestSummaryTemplate({
            requestId: id,
            customerEmail: email,
            startDate: start,
            endDate: end,
            rentalDays : days,
            status,
            products,
            totalAmount : total,
        });

        const result = await this.emailService.sendEmail({
            to : email,
            subject : 'Summary Of Requests',
            htmlContent : emailHtml
        })

        console.log(`email sent : ${JSON.stringify(result, null, 2)}`)
    }

}
