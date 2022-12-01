import {Body, Controller, Logger, Post, ValidationPipe} from '@nestjs/common';
import { CompanyModel } from '../model/company/company.model';
import {v4 as generateUUID} from 'uuid'

@Controller('/v1/companies')
export class CompanyController {
  private readonly logger = new Logger();

  @Post()
  create(@Body() requestBody: CompanyModel): CompanyModel {
    this.logger.log(`Executing company creation mock. Request: \n ${JSON.stringify(requestBody)}`)
    return new CompanyModel(
        generateUUID(),
        requestBody.registration,
        requestBody.details,
        requestBody.trading,
        requestBody.customization,
        requestBody.contacts
    )
  }
}
