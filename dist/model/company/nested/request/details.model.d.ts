export declare class DetailsModel {
    private readonly _legalName;
    private readonly _keyAccount;
    private readonly _nafCode;
    private readonly _city;
    private readonly _zipCode;
    private readonly _address;
    private readonly _country;
    private readonly _state;
    constructor(_legalName: string, _keyAccount: boolean, _nafCode: string, _city: string, _zipCode: string, _address: string, _country: string, _state: string);
    get legalName(): string;
    get keyAccount(): boolean;
    get nafCode(): string;
    get city(): string;
    get zipCode(): string;
    get address(): string;
    get country(): string;
    get state(): string;
}
