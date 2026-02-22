import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateQuantityDto } from './dto/update-quantity.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService : ProductsService){}

    @Get()
    async findAll(){
        return this.productService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id : string){
        return this.productService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id : string){
        return this.productService.softDelete(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() data : CreateProductDto){
        return this.productService.create(data);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id/quantity')
    async updateQuantity(@Param('id') id : string ,@Body() data : UpdateQuantityDto ){
        return this.productService.updateQuantity(id , data.quantity);
    }


    
}
