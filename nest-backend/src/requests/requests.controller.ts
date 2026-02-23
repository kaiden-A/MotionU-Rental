import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('requests')
export class RequestsController {

    constructor(private requestService : RequestsService){}

    @Get()
    async getAll(){
        return this.requestService.getAllRequest();
    }


    @Post()
    async create(@Body() data : CreateRequestDto){
        return this.requestService.create(data);
    }

}
