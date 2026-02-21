import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import  * as bcrypt  from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private usersService : UsersService,
        private jwtService : JwtService
    ){}


    async signUp(data : CreateUserDto){

        const existingUser = await this.usersService.findOneByEmail(data.email);

        if(existingUser){
            throw new ConflictException('Email Already Exits')
        }

        const hashPassword = await bcrypt.hash(data.password , 10);

        const user = await this.usersService.create({
            name : data.name,
            email :  data.email,
            passwordHash : hashPassword
        })

        const payLoad = {id : user.id , email : user.email}
        const token = await this.jwtService.signAsync(payLoad);

        return {
            access_token : token,
            admin : {
                name  : user.name
            }
        }

    }


    async signIn(data : CreateUserDto){

        const user = await this.usersService.findOneByEmail(data.email);

        if(!user){
            throw new UnauthorizedException('Invalid Credentials')
        }

        const isValid = await bcrypt.compare(data.password , user.passwordHash)

        if(!isValid){
            throw new UnauthorizedException('Invalid Credentials')
        }

        const payload = {id : user.id , email : user.email}
        const token = await this.jwtService.signAsync(payload)

        return {
            access_token : token 
        }
        
    }

}
