import { RegistrationModel } from './nested/registration.model';
import { DetailsModel } from './nested/details.model';
import { TradingModel } from './nested/trading.model';
import { ContactsModel } from './nested/contacts.model';
import { CustomizationModel } from './nested/customization.model';
import { ContextModel } from './nested/context.model';
export declare class CompanyResponseBodyModel {
    constructor(id: string, registration: RegistrationModel, details: DetailsModel, trading: TradingModel, customization: CustomizationModel, contacts: ContactsModel, context: ContextModel);
}
