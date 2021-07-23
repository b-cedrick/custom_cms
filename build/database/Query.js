"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Query = /** @class */ (function () {
    function Query(model) {
        this.fields = [];
        this.conditions = "";
        this.fieldToSelect = [];
        this.table = model.table;
        this.fields = model.fields;
    }
    Query.prototype.select = function (args) {
        this.fieldToSelect = args;
        return this;
    };
    Query.prototype.where = function (args) {
        var _this = this;
        args.map(function (arg) {
            var key = Object.keys(arg).pop();
            if (key) {
                _this.conditions += " WHERE " + key + " = " + arg[key];
            }
        });
        return this;
    };
    Query.prototype.andWhere = function (args) {
        var _this = this;
        args.map(function (arg) {
            var key = Object.keys(arg).pop();
            if (key) {
                _this.conditions += " AND " + key + " = " + arg[key];
            }
        });
        return this;
    };
    Query.prototype.orWhere = function (args) {
        var _this = this;
        args.map(function (arg) {
            var key = Object.keys(arg).pop();
            if (key) {
                _this.conditions += " OR " + key + " = " + arg[key];
            }
        });
        return this;
    };
    Query.prototype.from = function (table, alias) {
        if (alias === void 0) { alias = null; }
        if (!alias) {
            this.table = table;
        }
        else {
            this.table = table + " AS " + alias;
        }
        return this;
    };
    Query.prototype.toString = function () {
        var liestFields = (this.fieldToSelect.length > 0) ? this.fieldToSelect.join(', ') : '*';
        var query = 'SELECT ' + liestFields
            + ' FROM ' + this.table
            + this.conditions;
        this.fieldToSelect = [];
        this.table = "";
        this.conditions = "";
        return query;
    };
    return Query;
}());
exports.default = Query;
