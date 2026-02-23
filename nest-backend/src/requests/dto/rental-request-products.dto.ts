import { IsInt, IsString } from "class-validator";

export class RentalRequestProductDto {
  @IsString()
  productId: string;

  @IsInt()
  requestedQuantity: number;
}