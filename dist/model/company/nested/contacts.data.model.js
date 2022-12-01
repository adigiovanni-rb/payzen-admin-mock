"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsDataRequestModel = void 0;
class ContactsDataRequestModel {
    constructor(email, title, firstName, lastName) {
        this.email = email;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getTitle() {
        return this.title;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getEmail() {
        return this.email;
    }
}
exports.ContactsDataRequestModel = ContactsDataRequestModel;
//# sourceMappingURL=contacts.data.model.js.map