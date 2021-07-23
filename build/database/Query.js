"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Query = /** @class */ (function () {
    function Query(table, fields) {
        this.fields = [];
        this.conditions = [];
        this.fielsToSelect = [];
        this.table = table;
        this.fields = fields;
    }
    Query.prototype.select = function (args) {
        this.fielsToSelect = args;
        return this;
    };
    Query.prototype.where = function (args) {
        var _this = this;
        args.map(function (arg) { return _this.conditions = arg; });
        return this;
    };
    Query.prototype.from = function (table, alias) {
        if (alias === void 0) { alias = null; }
        if (alias) {
            this.table = table;
        }
        else {
            this.table = table + " AS " + alias;
        }
        return this;
    };
    Query.prototype.toString = function () {
        return 'SELECT ' + this.fielsToSelect.join(', ')
            + ' FROM ' + this.table
            + ' WHERE ' + this.conditions.join(' AND ');
    };
    return Query;
}());
exports.default = Query;
