"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Query_1 = __importDefault(require("../database/Query"));
var AbstractModel = /** @class */ (function () {
    function AbstractModel(table, fields) {
        this.fields = [];
        this.table = table;
        this.fields = fields;
        this.query = new Query_1.default(table);
    }
    AbstractModel.prototype.findAll = function () {
        var query = new Query_1.default(this.table);
        return query.findAll();
    };
    AbstractModel.prototype.find = function (fieldsToselect) {
        var query = new Query_1.default(this.table);
        return query.find(fieldsToselect);
    };
    AbstractModel.prototype.findById = function (id) {
        var query = new Query_1.default(this.table);
        return query.findById(id);
    };
    return AbstractModel;
}());
exports.default = AbstractModel;
