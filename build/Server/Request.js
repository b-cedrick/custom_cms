"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require('url');
var Request = /** @class */ (function () {
    function Request(req) {
        this.req = req;
        this.method = req.method;
        this.url = req.url;
        this.data = url.parse(req.url, true);
    }
    return Request;
}());
exports.default = Request;
