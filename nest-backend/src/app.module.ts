import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RequestsModule } from './requests/requests.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ 
    ProductsModule, 
    PrismaModule, 
    AuthModule, 
    UsersModule, 
    RequestsModule, 
    EmailModule,
    ConfigModule.forRoot({isGlobal : true})
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
