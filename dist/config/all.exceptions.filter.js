"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const [incomingMessage, serverResponse] = host.getArgs();
        const ctx = host.switchToHttp();
        console.log(incomingMessage);
        const responseBody = {
            code: "INT_001",
            message: exception.message === Array ? exception.message[0] : exception.message,
            field: '',
            context: {
                serverDateTime: new Date().toISOString(),
                user: "prismaadmin",
                requestId: "aa3c863ab8814bd5a0bdd52177159331",
                path: incomingMessage.originalUrl,
                hostname: "secure.payzen.lat"
            }
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, exception.status);
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all.exceptions.filter.js.map