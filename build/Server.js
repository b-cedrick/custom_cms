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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var Router_1 = __importDefault(require("./core/route/Router"));
var Request_1 = __importDefault(require("./core/Server/Request"));
var Response_1 = __importDefault(require("./core/Server/Response"));
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
    Server.prototype.checkRoute = function (req) {
        var _a;
        var METHOD = req.method;
        var URL = req.url;
        var selectedRoute = Router_1.default.getAll().filter(function (route) { return (route.method === METHOD && route.url === URL); });
        if (selectedRoute && selectedRoute.length > 0) {
            return selectedRoute[0].callback(req);
        }
        else {
            return (_a = Router_1.default.getAll().find(function (elem) { return elem.url === "/404"; })) === null || _a === void 0 ? void 0 : _a.callback(req);
        }
    };
    Server.prototype.startServer = function () {
        var _this = this;
        var server = http.createServer(function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var res, req;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = Response_1.default.instance(response);
                        return [4 /*yield*/, Request_1.default.instance(request)];
                    case 1:
                        req = _a.sent();
                        return [2 /*return*/, res.responseHandler(this.checkRoute(req))];
                }
            });
        }); });
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
