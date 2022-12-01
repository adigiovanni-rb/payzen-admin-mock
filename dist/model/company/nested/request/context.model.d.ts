export declare class ContextModel {
    private readonly _serverDateTime;
    private readonly _user;
    private readonly _requestId;
    private readonly _path;
    private readonly _hostname;
    constructor(_serverDateTime: string, _user: string, _requestId: string, _path: string, _hostname: string);
    get serverDateTime(): string;
    get user(): string;
    get requestId(): string;
    get path(): string;
    get hostname(): string;
}
