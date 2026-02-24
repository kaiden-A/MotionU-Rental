import { IsString } from "class-validator";


export class RejectRequestDto{

    @IsString()
    adminNote : string
}