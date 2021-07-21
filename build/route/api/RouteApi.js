"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("../../controllers/api"));
var Router_1 = __importDefault(require("../Router"));
var RouteApi = /** @class */ (function () {
    function RouteApi() {
        Router_1.default.get('/api/user', api_1.default.getUser);
        Router_1.default.get('/api/article', api_1.default.getArticles);
    }
    return RouteApi;
}());
exports.default = RouteApi;
