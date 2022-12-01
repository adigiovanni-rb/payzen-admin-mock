import { ContactsDataRequestModel } from "./contacts.data.request.model";
import { ContactsIncidentDataRequestModel } from "./contacts.incident.data.request.model";
export declare class ContactsModel {
    readonly administrator: ContactsDataRequestModel;
    readonly technical: ContactsDataRequestModel;
    readonly incident: ContactsIncidentDataRequestModel;
}
