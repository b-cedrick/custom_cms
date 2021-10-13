"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Query = /** @class */ (function () {
    function Query(model) {
        this.fields = [];
        this._join = "";
        this.conditions = "";
        this.action = "";
        this.isDelete = false;
        this.table = "";
        this.fieldToSelect = [];
        this.table = model.table;
        this.fields = model.fields;
    }
    Query.prototype.insert = function (arg) {
        var keys = [];
        var values = [];
        for (var _i = 0, _a = Object.entries(arg); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            console.log(key + ": " + value);
            keys.push(key);
            values.push(value);
        }
        var query = "INSERT INTO " + this.table + "(" + keys.join(', ') + ") VALUES (" + values.map(function (value) {
            return (typeof value == 'string') ? "'" + value.replace(/'/g, "\\'") + "'" : value;
        }).join(', ') + ")";
        console.log("query : ", query);
        this.table = "";
        return query;
    };
    Query.prototype.delete = function () {
        this.action = "DELETE ";
        this.isDelete = true;
        return this;
    };
    Query.prototype.update = function (arg) {
        var query_part = "";
        for (var _i = 0, _a = Object.entries(arg); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            console.log(key + ": " + value);
            if (key != '_id') {
                query_part += " " + key + " = " + ((typeof value == 'string') ? "'" + value.replace(/'/g, "\\'") + "'" : value) + ',';
            }
        }
        query_part = query_part.replace(/.$/, "");
        var query = "UPDATE " + this.table + " SET" + query_part + this.conditions;
        this.table = "";
        this.conditions = "";
        return query;
    };
    Query.prototype.select = function (args) {
        this.action = 'SELECT ';
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
        var _this = this;
        var conditions = "";
        var keys = Object.keys(args);
        if (keys && keys.length > 1) {
            keys.map(function (key, index) {
                if (key && index === 0)
                    conditions += _this.table + "." + key + " = " + args[key];
                if (key && index > 0)
                    conditions += " AND " + _this.table + "." + key + " = '" + args[key] + "'";
            });
        }
        else {
            conditions += this.table + "." + keys[0] + " = '" + args[keys[0]] + "'";
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
    Query.prototype.join = function (data) {
        var _this = this;
        data.map(function (item) {
            if (item.inner) {
                _this._join += " INNER JOIN " + item.table + " ON " + item.table + "._id = " + _this.table + "." + item.field + " ";
            }
            else if (item.left) {
                _this._join += " LEFT JOIN " + item.table + " ON " + item.table + "._id = " + _this.table + "." + item.field + " ";
            }
            else if (item.right) {
                _this._join += " RIGHT JOIN " + item.table + " ON " + item.table + "._id = " + _this.table + "." + item.field + " ";
            }
        });
        return this;
    };
    Query.prototype.toString = function () {
        var liestFields = this.isDelete ? '' : ((this.fieldToSelect.length > 0) ? this.fieldToSelect.join(', ') : '*');
        var query = this.action + liestFields
            + ' FROM ' + this.table
            + this._join
            + this.conditions;
        this.fieldToSelect = [];
        this.action = "";
        this.isDelete = false;
        this._join = "";
        this.conditions = "";
        return query;
    };
    return Query;
}());
exports.default = Query;
