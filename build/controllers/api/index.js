"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiController = /** @class */ (function () {
    function ApiController() {
    }
    ApiController.getUser = function (req) {
        return { nom: "Cédrick", email: "mail1@gmail.com" };
    };
    ApiController.getArticles = function (req) {
        return { title: "Mon premier articles" };
    };
    return ApiController;
}());
exports.default = ApiController;
