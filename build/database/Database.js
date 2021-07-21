"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2');
require('dotenv').config();
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.getArticle = function () {
        var _this = this;
        var query = 'SELECT * FROM `articles` WHERE `_id` = ?';
        var params = [1];
        // const query = 'SELECT _id, title, post_date, content FROM `articles`'
        // with placeholder
        return this.connection.promise()
            .query(query, params)
            .then(function (_a) {
            var rows = _a[0], fields = _a[1];
            return rows ? _this.sanitizeData(rows, fields) : [];
        })
            .catch(function (error) {
            console.log("Error : ", error);
        });
    };
    Database.sanitizeData = function (data, fields) {
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
    // create the connection to database
    Database.connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE
    });
    return Database;
}());
exports.default = Database;
