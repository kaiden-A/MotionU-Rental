import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports : [EmailModule],
  providers: [RequestsService],
  controllers: [RequestsController]
})
export class RequestsModule {}
