export declare class CustomizationModel {
    private readonly language;
    private readonly timeZone;
    private readonly securityCode;
    private readonly theme;
    constructor(language: string, timeZone: string, securityCode: string, theme: string);
    getLanguage(): string;
    getTimeZone(): string;
    getSecurityCode(): string;
    getTheme(): string;
}
