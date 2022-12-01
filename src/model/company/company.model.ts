import { ContactsModel } from '../common/contacts.request.model';
import { CustomizationRequestModel } from '../common/customization.request.model';
import { TradingRequestModel } from '../common/trading.request.model';
import { DetailsRequestModel } from '../common/details.request.model';
import {RegistrationRequestModel} from "../common/registration.request.model";
import {IsDefined, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class CompanyModel {

  id?: string;

  @IsDefined()
  @ValidateNested()
  @Type(()=> RegistrationRequestModel)
  readonly registration: RegistrationRequestModel;
  @IsDefined()
  @ValidateNested()
  @Type(()=> DetailsRequestModel)
  readonly details: DetailsRequestModel;
  @IsDefined()
  @ValidateNested()
  @Type(()=> TradingRequestModel)
  readonly trading: TradingRequestModel;
  @IsDefined()
  @ValidateNested()
  @Type(()=> CustomizationRequestModel)
  readonly customization: CustomizationRequestModel;
  @IsDefined()
  @ValidateNested()
  @Type(()=> ContactsModel)
  readonly contacts: ContactsModel;

  constructor(
    id: string,
    registration: RegistrationRequestModel,
    details: DetailsRequestModel,
    trading: TradingRequestModel,
    customization: CustomizationRequestModel,
    contacts: ContactsModel,
  ) {
    this.id = id;
    this.registration = registration;
    this.details = details;
    this.trading = trading;
    this.customization = customization;
    this.contacts = contacts;
  }
}
