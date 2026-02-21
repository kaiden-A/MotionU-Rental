import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class UsersService {

    constructor(private prisma : PrismaService){}

    async findOneByEmail(email : string){
        
        const user = await this.prisma.admin.findUnique({where : {email}})

        return user;
    }

    async create(data : {name : string , email : string , passwordHash : string }){
        return this.prisma.admin.create({
            data : data,
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
        });
    }
}
