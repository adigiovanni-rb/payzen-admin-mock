import { ContactsModel } from '../common/contacts.request.model';
import { CustomizationRequestModel } from '../common/customization.request.model';
import { TradingRequestModel } from '../common/trading.request.model';
import { DetailsRequestModel } from '../common/details.request.model';
import { RegistrationRequestModel } from "../common/registration.request.model";
export declare class CompanyModel {
    id?: string;
    readonly registration: RegistrationRequestModel;
    readonly details: DetailsRequestModel;
    readonly trading: TradingRequestModel;
    readonly customization: CustomizationRequestModel;
    readonly contacts: ContactsModel;
    constructor(id: string, registration: RegistrationRequestModel, details: DetailsRequestModel, trading: TradingRequestModel, customization: CustomizationRequestModel, contacts: ContactsModel);
}
