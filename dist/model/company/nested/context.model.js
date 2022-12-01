"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextModel = void 0;
class ContextModel {
    constructor(_serverDateTime, _user, _requestId, _path, _hostname) {
        this._serverDateTime = _serverDateTime;
        this._user = _user;
        this._requestId = _requestId;
        this._path = _path;
        this._hostname = _hostname;
    }
    get serverDateTime() {
        return this._serverDateTime;
    }
    get user() {
        return this._user;
    }
    get requestId() {
        return this._requestId;
    }
    get path() {
        return this._path;
    }
    get hostname() {
        return this._hostname;
    }
}
exports.ContextModel = ContextModel;
//# sourceMappingURL=context.model.js.map