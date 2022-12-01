"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsResponseModel = void 0;
class ContactsResponseModel {
    constructor(administrator, technical, incident) {
        this.administrator = administrator;
        this.technical = technical;
        this.incident = incident;
    }
    getAdministrator() {
        return this.administrator;
    }
    getTechnical() {
        return this.technical;
    }
    getIncident() {
        return this.incident;
    }
}
exports.ContactsResponseModel = ContactsResponseModel;
//# sourceMappingURL=contacts.response.model.js.map