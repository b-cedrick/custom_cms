"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RouteApi_1 = __importDefault(require("./api/RouteApi"));
var RoutesWeb_1 = __importDefault(require("./web/RoutesWeb"));
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.make = function () {
        //Route web
        new RoutesWeb_1.default();
        // Route api
        new RouteApi_1.default();
    };
    return Routes;
}());
exports.default = Routes;
