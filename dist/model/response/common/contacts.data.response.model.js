"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsDataResponseModel = void 0;
class ContactsDataResponseModel {
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
exports.ContactsDataResponseModel = ContactsDataResponseModel;
//# sourceMappingURL=contacts.data.response.model.js.map