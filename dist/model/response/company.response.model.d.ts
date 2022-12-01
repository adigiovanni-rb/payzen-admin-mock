import { RegistrationResponseModel } from "./common/registration.response.model";
import { DetailsResponseModel } from "./common/details.response.model";
import { TradingResponseModel } from "./common/trading.response.model";
import { CustomizationResponseModel } from "./common/customization.response.model";
import { ContactsResponseModel } from "./common/contacts.response.model";
export declare class CompanyResponseModel {
    constructor(id: string, registration: RegistrationResponseModel, details: DetailsResponseModel, trading: TradingResponseModel, customization: CustomizationResponseModel, contacts: ContactsResponseModel);
}
