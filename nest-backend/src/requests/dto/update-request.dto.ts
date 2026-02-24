import { IsDate, IsString } from "class-validator";


export class UpdateRequestDto{

    @IsDate()
    returnDate : Date;

}