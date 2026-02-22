import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestsService {

    constructor(private prisma : PrismaService){};

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
            },
        });

        if(!rentalRequests){
            throw new NotFoundException('Request Doesnt Exist');
        }

        return rentalRequests;
    }

    async create(data : CreateRequestDto){
        return this.prisma.rentalRequest.create({
            data : {
                ...data
            }
        })
    }

    async updateApproved(){

        //update status to approved

        //give email to the user
    }

}
