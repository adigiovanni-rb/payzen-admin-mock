import { ContactsDataRequestModel } from "./contacts.data.model";
import { ContactsIncidentDataModel } from "./contacts.incident.data.model";
export declare class ContactsModel {
    private readonly administrator;
    private readonly technical;
    private readonly incident;
    constructor(administrator: ContactsDataRequestModel, technical: ContactsDataRequestModel, incident: ContactsIncidentDataModel);
    getAdministrator(): ContactsDataRequestModel;
    getTechnical(): ContactsDataRequestModel;
    getIncident(): ContactsIncidentDataModel;
}
