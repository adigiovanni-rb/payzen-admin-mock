"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizationResponseModel = void 0;
class CustomizationResponseModel {
    constructor(language, timeZone, securityCode, theme) {
        this.language = language;
        this.timeZone = timeZone;
        this.securityCode = securityCode;
        this.theme = theme;
    }
    getLanguage() {
        return this.language;
    }
    getTimeZone() {
        return this.timeZone;
    }
    getSecurityCode() {
        return this.securityCode;
    }
    getTheme() {
        return this.theme;
    }
}
exports.CustomizationResponseModel = CustomizationResponseModel;
//# sourceMappingURL=customization.response.model.js.map