"use strict";
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
var articles_controller_1 = __importDefault(require("../../controllers/api/articles.controller"));
var commentaires_controller_1 = __importDefault(require("../../controllers/api/commentaires.controller"));
var users_controller_1 = __importDefault(require("../../controllers/api/users.controller"));
var Router_1 = __importDefault(require("../Router"));
var RouteApi = /** @class */ (function () {
    function RouteApi() {
        /***************** User *******************/
        var _this = this;
        /******************* GET **********************/
        Router_1.default.get('/api/user', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_controller_1.default.getUser(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Router_1.default.get('/api/user/all', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_controller_1.default.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /***********************************************/
        /***************** Articles *******************/
        /******************* GET **********************/
        Router_1.default.get('/api/article/all', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles_controller_1.default.getAllArticles()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Router_1.default.get('/api/article/test', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles_controller_1.default.getArticle(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Router_1.default.get('/api/article', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles_controller_1.default.getArticle(req.data._id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /******************* POST **********************/
        Router_1.default.post('/api/article/add', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles_controller_1.default.addArticle(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /******************* PATCH **********************/
        // Router.patch('/api/article', async (req: Request)=>{
        //     return await ArticlesController.updateArticles(req.data._id)
        // })
        /***********************************************/
        /******************* PUT **********************/
        Router_1.default.put('/api/article/update', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles_controller_1.default.updateArticles(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /******************* DELETE **********************/
        Router_1.default.delete('/api/article/delete', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, articles_controller_1.default.deleteArticles(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /***********************************************/
        /***************** Commentaires *******************/
        /******************* GET **********************/
        Router_1.default.get('/api/commentaire/all', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commentaires_controller_1.default.getAllCommentaires()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Router_1.default.get('/api/commentaire/test', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commentaires_controller_1.default.getCommentaire(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        Router_1.default.get('/api/commentaire', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commentaires_controller_1.default.getCommentaire(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /******************* POST **********************/
        Router_1.default.post('/api/commentaire/add', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commentaires_controller_1.default.addCommentaire(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /******************* PATCH **********************/
        // Router.patch('/api/commentaire', async (req: Request)=>{
        //     return await CommentairesController.updateCommentaires(req.data._id)
        // })
        /***********************************************/
        /******************* PUT **********************/
        Router_1.default.put('/api/commentaire/update', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commentaires_controller_1.default.updateCommentaires(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /******************* DELETE **********************/
        Router_1.default.delete('/api/commentaire/delete', function (req) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, commentaires_controller_1.default.deleteCommentaires(req.data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
        /***********************************************/
        /***********************************************/
    }
    return RouteApi;
}());
exports.default = RouteApi;
