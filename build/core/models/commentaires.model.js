"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentaire = void 0;
var FieldsType_1 = require("../enum/FieldsType");
var AbstractModel_1 = __importDefault(require("./AbstractModel"));
var Commentaire = /** @class */ (function (_super) {
    __extends(Commentaire, _super);
    function Commentaire(table, fields) {
        var _this = _super.call(this, table, fields) || this;
        _this.fields = fields;
        return _this;
    }
    return Commentaire;
}(AbstractModel_1.default));
exports.commentaire = new Commentaire('commentaires', [
    { field: '_id', type: FieldsType_1.TypeFields.Number },
    { field: 'user_id', type: FieldsType_1.TypeFields.Number },
    { field: 'article_id', type: FieldsType_1.TypeFields.Number },
    { field: 'content', type: FieldsType_1.TypeFields.String }
]);
