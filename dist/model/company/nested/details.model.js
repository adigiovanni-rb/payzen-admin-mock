"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsModel = void 0;
class DetailsModel {
    constructor(_legalName, _keyAccount, _nafCode, _city, _zipCode, _address, _country, _state) {
        this._legalName = _legalName;
        this._keyAccount = _keyAccount;
        this._nafCode = _nafCode;
        this._city = _city;
        this._zipCode = _zipCode;
        this._address = _address;
        this._country = _country;
        this._state = _state;
    }
    get legalName() {
        return this._legalName;
    }
    get keyAccount() {
        return this._keyAccount;
    }
    get nafCode() {
        return this._nafCode;
    }
    get city() {
        return this._city;
    }
    get zipCode() {
        return this._zipCode;
    }
    get address() {
        return this._address;
    }
    get country() {
        return this._country;
    }
    get state() {
        return this._state;
    }
}
exports.DetailsModel = DetailsModel;
//# sourceMappingURL=details.model.js.map