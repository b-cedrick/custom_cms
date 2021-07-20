"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MethodsEnum_1 = require("./MethodsEnum");
var Route_1 = __importDefault(require("./Route"));
var Router = /** @class */ (function () {
    function Router() {
        this.routes = [];
    }
    Router.getInstance = function () {
        if (!this.instance) {
            this.instance = new Router();
        }
        return this.instance;
    };
    Router.prototype.createRoute = function (method, url, callback) {
        this.routes.push(new Route_1.default(method, url, callback));
    };
    Router.get = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Get, url, callback);
    };
    Router.post = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Post, url, callback);
    };
    Router.put = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Put, url, callback);
    };
    Router.delete = function (url, callback) {
        this.getInstance().createRoute(MethodsEnum_1.MethodsEnum.Delete, url, callback);
    };
    Router.checkRoute = function (req, res) {
        var METHOD = req.method;
        var URL = req.url;
        var selectedRoute = this.getInstance().routes.filter(function (route) { return (route.method === METHOD && route.url === URL); });
        if (selectedRoute && selectedRoute.length > 0) {
            return selectedRoute.pop().callback();
        }
        else {
            return this.getInstance().routes.filter(function (route) { return (route.url.includes('404')); }).pop().callback();
        }
    };
    return Router;
}());
exports.default = Router;
