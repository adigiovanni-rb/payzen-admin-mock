"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationModel = void 0;
class RegistrationModel {
    constructor(_provider, _registrationDate, _closingDate) {
        this._provider = _provider;
        this._registrationDate = _registrationDate;
        this._closingDate = _closingDate;
    }
    get provider() {
        return this._provider;
    }
    get registrationDate() {
        return this._registrationDate;
    }
    get closingDate() {
        return this._closingDate;
    }
}
exports.RegistrationModel = RegistrationModel;
//# sourceMappingURL=registration.model.js.map