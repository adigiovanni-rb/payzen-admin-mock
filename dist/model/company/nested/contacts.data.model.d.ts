export declare class ContactsDataRequestModel {
    private readonly email;
    private readonly title;
    private readonly firstName;
    private readonly lastName;
    constructor(email: string, title: string, firstName: string, lastName: string);
    getTitle(): string;
    getFirstName(): string;
    getLastName(): string;
    getEmail(): string;
}
