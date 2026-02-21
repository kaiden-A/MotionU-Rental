import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){}

    @Post('login')
    async login(@Body() userDto : CreateUserDto){
        return this.authService.signIn(userDto)
    }

    @Post('signup')
    async signUp(@Body() userDto : CreateUserDto){
        return this.authService.signUp(userDto);
    }
}
