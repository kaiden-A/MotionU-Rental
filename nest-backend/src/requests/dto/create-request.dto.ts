import { IsDate, IsEmail, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RentalRequestProductDto } from "./rental-request-products.dto";

export class CreateRequestDto {

  @IsEmail()
  customerEmail: string;

  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RentalRequestProductDto)
  products: RentalRequestProductDto[];
}