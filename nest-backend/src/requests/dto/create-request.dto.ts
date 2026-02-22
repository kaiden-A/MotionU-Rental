import { IsDate, IsString } from "class-validator";

export class CreateRequestDto{

    @IsString()
    id : string;

    @IsString()
    customerEmail : string;

    @IsDate()
    startDate : Date;

    @IsDate()
    endDate : Date;


}