"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var Router_1 = __importDefault(require("./route/Router"));
require('dotenv').config();
/**
 * The Server class defines the `getInstance` method that lets clients access
 * the unique Server instance.
 */
var Server = /** @class */ (function () {
    /**
     * The Server's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    function Server() {
        this.SERVER_ADDRESS = process.env.SERVER_ADDRESS || '0.0.0.0';
        this.SERVER_PORT = process.env.SERVER_PORT || 8000;
    }
    /**
     * The static method that controls the access to the Server instance.
     *
     * This implementation let you subclass the Server class while keeping
     * just one instance of each subclass around.
     */
    Server.getInstance = function () {
        if (!this.instance) {
            this.instance = new Server();
        }
        return this.instance;
    };
    /**
     * Finally, any Server should define some business logic, which can be
     * executed on its instance.
     */
    Server.prototype.startServer = function () {
        var _this = this;
        var server = http.createServer(function (req, res) {
            Router_1.default.checkRoute(req, res);
        });
        server.listen(this.SERVER_PORT, this.SERVER_ADDRESS, function () {
            console.log("\uD83D\uDE80\uD83D\uDE80Server is running on http://" + _this.SERVER_ADDRESS + ":" + _this.SERVER_PORT + "\uD83D\uDE80\uD83D\uDE80");
        });
    };
    Server.start = function () {
        this.getInstance().startServer();
    };
    return Server;
}());
exports.default = Server;