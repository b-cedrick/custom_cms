"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2');
require('dotenv').config();
var Database = /** @class */ (function () {
    function Database() {
        // create the connection to database
        this.conn = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            password: process.env.MYSQL_PASSWORD,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DATABASE
        });
    }
    Database.connect = function () {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    };
    return Database;
}());
exports.default = Database;
