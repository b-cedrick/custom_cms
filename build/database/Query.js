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
        var conditions = "";
        if ((typeof args === 'object') && !Array.isArray(args)) {
            conditions += " (" + this.and(args) + ")";
        }
        else if (Array.isArray(args)) {
            args.map(function (arg, index) {
                if (arg && index === 0)
                    conditions += " (" + _this.and(arg) + ")";
                if (arg && index > 0)
                    conditions += " OR " + " (" + _this.and(arg) + ")";
            });
        }
        if (conditions)
            this.conditions += " WHERE " + conditions;
        return this;
    };
    Query.prototype.and = function (args) {
        var conditions = "";
        var keys = Object.keys(args);
        if (keys && keys.length > 1) {
            keys.map(function (key, index) {
                if (key && index === 0)
                    conditions += key + " = " + args[key];
                if (key && index > 0)
                    conditions += " AND " + key + " = '" + args[key] + "'";
            });
        }
        else {
            conditions += keys[0] + " = '" + args[keys[0]] + "'";
        }
        return conditions;
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
