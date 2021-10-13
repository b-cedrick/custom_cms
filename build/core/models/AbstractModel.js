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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = __importDefault(require("../database/Database"));
var Query_1 = __importDefault(require("../database/Query"));
var AbstractModel = /** @class */ (function () {
    function AbstractModel(table, fields) {
        this.fields = [];
        this.selection = [];
        this.join = [];
        this.table = table;
        this.fields = fields;
        this.query = new Query_1.default(this);
    }
    AbstractModel.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.join(this.join).select(this.selection).from(this.table).toString();
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbstractModel.prototype.find = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.join(this.join).select(this.selection).from(this.table).where(data).toString();
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbstractModel.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.join(this.join).select(this.selection).from(this.table).where([{ _id: id }]).toString();
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, Array.isArray(data) ? data[0] : data];
                }
            });
        });
    };
    AbstractModel.prototype.add = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.from(this.table).insert(data);
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbstractModel.prototype.update = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.from(this.table).where({ _id: data._id }).update(data);
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbstractModel.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryString = this.query.delete().from(this.table).where(data).toString();
                        return [4 /*yield*/, this.runQuery(queryString)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbstractModel.prototype.resetSelection = function () {
        this.selection = [];
    };
    AbstractModel.prototype.selectFields = function (data) {
        this.selection = data;
        return this;
    };
    AbstractModel.prototype.innerJoin = function (data) {
        this.join.push(Object.assign(data, { inner: true, left: false, right: false }));
        return this;
    };
    AbstractModel.prototype.leftJoin = function (data) {
        this.join.push(Object.assign(data, { inner: false, left: true, right: false }));
        return this;
    };
    AbstractModel.prototype.rightJoin = function (data) {
        this.join.push(Object.assign(data, { inner: false, left: false, right: true }));
        return this;
    };
    AbstractModel.prototype.excludeFields = function (data) {
        var temp = [];
        this.fields.map(function (item) {
            if (!data.includes(item.field)) {
                temp.push(item.field);
            }
        });
        this.selection = __spreadArray([], temp);
        temp = [];
        return this;
    };
    AbstractModel.prototype.runQuery = function (queryString) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.join = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.resetSelection();
                        return [4 /*yield*/, Database_1.default.query(queryString)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, { error: error_1.toString() }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AbstractModel;
}());
exports.default = AbstractModel;
