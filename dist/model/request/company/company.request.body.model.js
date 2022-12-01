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
exports.CompanyRequestBodyModel = void 0;
const contacts_request_model_1 = require("../common/contacts.request.model");
const customization_request_model_1 = require("../common/customization.request.model");
const trading_request_model_1 = require("../common/trading.request.model");
const details_request_model_1 = require("../common/details.request.model");
const registration_request_model_1 = require("../common/registration.request.model");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CompanyRequestBodyModel {
    constructor(registration, details, trading, customization, contacts) {
        this.registration = registration;
        this.details = details;
        this.trading = trading;
        this.customization = customization;
        this.contacts = contacts;
    }
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => registration_request_model_1.RegistrationRequestModel),
    __metadata("design:type", registration_request_model_1.RegistrationRequestModel)
], CompanyRequestBodyModel.prototype, "registration", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => details_request_model_1.DetailsRequestModel),
    __metadata("design:type", details_request_model_1.DetailsRequestModel)
], CompanyRequestBodyModel.prototype, "details", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => trading_request_model_1.TradingRequestModel),
    __metadata("design:type", trading_request_model_1.TradingRequestModel)
], CompanyRequestBodyModel.prototype, "trading", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => customization_request_model_1.CustomizationRequestModel),
    __metadata("design:type", customization_request_model_1.CustomizationRequestModel)
], CompanyRequestBodyModel.prototype, "customization", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => contacts_request_model_1.ContactsModel),
    __metadata("design:type", contacts_request_model_1.ContactsModel)
], CompanyRequestBodyModel.prototype, "contacts", void 0);
exports.CompanyRequestBodyModel = CompanyRequestBodyModel;
//# sourceMappingURL=company.request.body.model.js.map