export declare class RegistrationModel {
    private readonly _provider;
    private readonly _registrationDate?;
    private readonly _closingDate?;
    constructor(_provider: string, _registrationDate?: string, _closingDate?: string);
    get provider(): string;
    get registrationDate(): string;
    get closingDate(): string;
}
