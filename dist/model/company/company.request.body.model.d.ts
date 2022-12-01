import { ContactsModel } from './nested/contacts.model';
import { CustomizationModel } from './nested/customization.model';
import { TradingModel } from './nested/trading.model';
import { DetailsModel } from './nested/details.model';
import { RegistrationModel } from "./nested/registration.model";
export declare class CompanyRequestBodyModel {
    readonly registration: RegistrationModel;
    readonly details: DetailsModel;
    readonly trading: TradingModel;
    readonly customization: CustomizationModel;
    readonly contacts: ContactsModel;
    constructor(registration: RegistrationModel, details: DetailsModel, trading: TradingModel, customization: CustomizationModel, contacts: ContactsModel);
}
