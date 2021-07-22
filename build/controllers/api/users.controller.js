"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = __importDefault(require("../../database/Database"));
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.getUsers = function () {
        var query = 'SELECT * FROM `users` WHERE `_id` = ?';
        var params = [1];
        return Database_1.default.query(query, params);
    };
    return UsersController;
}());
exports.default = UsersController;
