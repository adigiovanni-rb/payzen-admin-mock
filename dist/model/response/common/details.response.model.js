"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsResponseModel = void 0;
class DetailsResponseModel {
    constructor(legalName, city, state, country) {
        this.legalName = legalName;
        this.city = city;
        this.state = state;
        this.country = country;
    }
    getLegalName() { return this.legalName; }
    getCity() { return this.city; }
    getState() { return this.state; }
    getCountry() { return this.country; }
}
exports.DetailsResponseModel = DetailsResponseModel;
//# sourceMappingURL=details.response.model.js.map