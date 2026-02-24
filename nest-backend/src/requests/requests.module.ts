import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { EmailModule } from 'src/email/email.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports : [EmailModule , AuthModule],
  providers: [RequestsService],
  controllers: [RequestsController]
})
export class RequestsModule {}
