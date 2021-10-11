"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.sanitizeData = function (data, fields) {
        var item = {};
        var keys = fields.map(function (field) { return field.name; });
        if (Array.isArray(data)) {
            var temp_1 = [];
            data.map(function (elem) {
                keys.map(function (key) {
                    item[key] = elem[key];
                });
                temp_1.push(__assign({}, item));
            });
            return temp_1;
        }
        else {
            keys.map(function (key) {
                item[key] = data[key];
            });
            return item;
        }
    };
    return Utils;
}());
exports.default = Utils;
