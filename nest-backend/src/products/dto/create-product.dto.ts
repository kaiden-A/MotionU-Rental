import { IsString, IsInt, IsNumber, Min } from 'class-validator';

export class CreateProductDto{
    
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    productLink: string;
    
    @IsInt()
    @Min(0)
    quantity: number ;

    @IsNumber()
    ratePerDay:number;
}