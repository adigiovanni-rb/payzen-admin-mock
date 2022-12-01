import { Module } from '@nestjs/common';
import { CompanyController } from './controller/company.controller';

@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [],
})
export class AppModule {}
