import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
@Injectable()
export class ProductsService {

    constructor(private prisma : PrismaService){}


    async findAll(){
        return this.prisma.product.findMany();
    }

    async findById(id : string){
        const product = await this.prisma.product.findUnique({where : {id}});

        if(!product){
            throw new NotFoundException(`Product with id ${id} is not exist`);
        }
    }

    async findActive(){
        return this.prisma.product.findMany({where : {isActive : true}})
    }

    async updateQuantity(id : string , quantity : number){
        return this.prisma.product.update({
            where : {id},
            data : {quantity}
        })
    }

    async softDelete(id : string){
        return this.prisma.product.update({
            where : {id},
            data : {isActive : false}
        })
    }

    async create(product : CreateProductDto){
        return this.prisma.product.create({
            data : {
                ...product,
                isActive : true
            }
        })
    }

}
