import { RegistrationRequestModel } from '../request/common/registration.request.model';
import { DetailsRequestModel } from '../request/common/details.request.model';
import { TradingRequestModel } from '../request/common/trading.request.model';
import { ContactsModel } from '../request/common/contacts.request.model';
import { CustomizationRequestModel } from '../request/common/customization.request.model';
export declare class CompanyResponseBodyModel {
    constructor(id: string, registration: RegistrationRequestModel, details: DetailsRequestModel, trading: TradingRequestModel, customization: CustomizationRequestModel, contacts: ContactsModel);
}
