import { Body, Controller, Get, Post, Put , Param, UseGuards, Req } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { RejectRequestDto } from './dto/rejected-request.dto';

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

    @UseGuards(JwtAuthGuard)
    @Put(':id/approved')
    async updateApproved(
        @Param('id') id : string,
        @Body() data : UpdateRequestDto,
        @Req() req : any
    ){


        return this.requestService.updateApproved({
            id , 
            adminId : req.id ,
            returnDate : data.returnDate
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id/rejected')
    async rejectUpdate(
        @Param('id') id : string,
        @Body() data : RejectRequestDto,
        @Req() req : any
    ){
        return this.requestService.updateRejected({
            id,
            adminId : req.id,
            adminNote : data.adminNote
        })
    }

}
