"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = __importDefault(require("../../database/Database"));
var ArticlesController = /** @class */ (function () {
    function ArticlesController() {
    }
    ArticlesController.getArticle = function () {
        var _this = this;
        var query = 'SELECT * FROM `articles` WHERE `_id` = ?';
        var params = [1];
        // const query = 'SELECT _id, title, post_date, content FROM `articles`'
        // with placeholder
        return Database_1.default.connect().conn.promise()
            .query(query, params)
            .then(function (_a) {
            var rows = _a[0], fields = _a[1];
            return rows ? _this.sanitizeData(rows, fields) : [];
        })
            .catch(function (error) {
            console.log("Error : ", error);
        });
    };
    ArticlesController.sanitizeData = function (data, fields) {
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
    return ArticlesController;
}());
exports.default = ArticlesController;
