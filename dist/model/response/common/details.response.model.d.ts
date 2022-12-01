export declare class DetailsResponseModel {
    private readonly legalName;
    private readonly city;
    private readonly state;
    private readonly country;
    constructor(legalName: string, city: string, state: string, country: string);
    getLegalName(): string;
    getCity(): string;
    getState(): string;
    getCountry(): string;
}
