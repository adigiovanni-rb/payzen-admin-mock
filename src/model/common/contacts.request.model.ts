import {ContactsDataRequestModel} from "./contacts.data.request.model";
import {ContactsIncidentDataRequestModel} from "./contacts.incident.data.request.model";
import {IsNotEmpty} from "class-validator";

export class ContactsModel {

	@IsNotEmpty()
	readonly administrator: ContactsDataRequestModel
	@IsNotEmpty()
	readonly technical: ContactsDataRequestModel
	@IsNotEmpty()
	readonly incident: ContactsIncidentDataRequestModel

}
