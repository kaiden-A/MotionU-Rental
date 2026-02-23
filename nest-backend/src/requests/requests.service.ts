import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from 'generated/prisma/browser';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { EmailService } from 'src/email/email.service';
import { rentalRequestSummaryTemplate } from 'src/email/templates/request-summary.template';

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

        //email tempalate
        const emailHtml = rentalRequestSummaryTemplate({
            requestId: createdRequest.id,
            customerEmail: data.customerEmail,
            startDate: start,
            endDate: end,
            rentalDays,
            products: productSummary,
            totalAmount,
        });

      //semd email
      const result = await this.emailService.sendEmail({
        to : data.customerEmail,
        subject : 'Summary Of Requests',
        htmlContent : emailHtml
      })

      console.log(`email sent : ${JSON.stringify(result, null, 2)}`)

      return createdRequest;
    });

    return rentalRequest;
  }

    async updateApproved(){

        //update status to approved

        //give email to the user
    }

}
