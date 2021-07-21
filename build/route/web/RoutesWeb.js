"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_controller_1 = __importDefault(require("../../controllers/web/main.controller"));
var Router_1 = __importDefault(require("../Router"));
var RoutesWeb = /** @class */ (function () {
    function RoutesWeb() {
        Router_1.default.get('/', main_controller_1.default.showMainPage);
        Router_1.default.get('/home', main_controller_1.default.showHomePage);
        Router_1.default.get('/404', main_controller_1.default.show404Page);
    }
    return RoutesWeb;
}());
exports.default = RoutesWeb;
