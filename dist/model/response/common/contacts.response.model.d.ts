import { ContactsDataResponseModel } from "./contacts.data.response.model";
import { ContactsIncidentDataResponseModel } from "./contacts.incident.data.response.model";
export declare class ContactsResponseModel {
    private readonly administrator;
    private readonly technical;
    private readonly incident;
    constructor(administrator: ContactsDataResponseModel, technical: ContactsDataResponseModel, incident: ContactsIncidentDataResponseModel);
    getAdministrator(): ContactsDataResponseModel;
    getTechnical(): ContactsDataResponseModel;
    getIncident(): ContactsIncidentDataResponseModel;
}
