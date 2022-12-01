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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const company_model_1 = require("../model/company/company.model");
const uuid_1 = require("uuid");
let CompanyController = class CompanyController {
    constructor() {
        this.logger = new common_1.Logger();
    }
    create(requestBody) {
        this.logger.log(`Executing company creation mock. Request: \n ${JSON.stringify(requestBody)}`);
        return new company_model_1.CompanyModel((0, uuid_1.v4)(), requestBody.registration, requestBody.details, requestBody.trading, requestBody.customization, requestBody.contacts);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_model_1.CompanyModel]),
    __metadata("design:returntype", company_model_1.CompanyModel)
], CompanyController.prototype, "create", null);
CompanyController = __decorate([
    (0, common_1.Controller)('/v1/companies')
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map