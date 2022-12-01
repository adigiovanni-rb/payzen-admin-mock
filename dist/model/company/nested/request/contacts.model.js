"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsModel = void 0;
class ContactsModel {
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
exports.ContactsModel = ContactsModel;
//# sourceMappingURL=contacts.model.js.map