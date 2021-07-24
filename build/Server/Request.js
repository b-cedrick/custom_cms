"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodsEnum_1 = require("../enum/MethodsEnum");
var url = require('url');
var Request = /** @class */ (function () {
    function Request(req) {
        this.req = req;
        this.method = req.method;
        this.url = req.url;
        this.setData(req);
    }
    Request.prototype.parseBody = function (req) {
        var _this = this;
        var body = '';
        req.on('data', function (chunk) {
            body += chunk.toString();
        });
        req.on('end', function () {
            body = JSON.parse(body);
            console.log(body);
            _this.data = url.parse(req.url).query;
        });
        return body;
    };
    Request.prototype.extractGetParams = function (url) {
        var pattern = /[(\?|\&)]([^=]+)\=([^&#]+)/g;
        var arr = url.match(pattern);
        return arr;
    };
    Request.prototype.setData = function (req) {
        switch (req.method) {
            case MethodsEnum_1.MethodsEnum.Get:
                console.log("GETTTTT PARAMS :", url.parse(req.url).query);
                console.log("GETTTTT PARAMS :", this.extractGetParams(url.parse(req.url).query));
                this.url = url.parse(req.url).pathname;
                this.data = url.parse(req.url).query;
                break;
            case MethodsEnum_1.MethodsEnum.Post:
                this.data = this.parseBody(req);
                break;
            case MethodsEnum_1.MethodsEnum.Patch:
                this.data = this.parseBody(req);
                break;
            case MethodsEnum_1.MethodsEnum.Put:
                this.data = this.parseBody(req);
                break;
            case MethodsEnum_1.MethodsEnum.Delete:
                this.data = this.parseBody(req);
                break;
            default:
                break;
        }
    };
    return Request;
}());
exports.default = Request;
