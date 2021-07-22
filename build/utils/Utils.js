"use strict";
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
                temp_1.push(item);
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
