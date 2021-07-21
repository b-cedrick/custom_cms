"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(req) {
        this.req = req;
        this.method = req.method;
        this.url = req.url;
    }
    return Request;
}());
exports.default = Request;
