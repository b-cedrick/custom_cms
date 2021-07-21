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
Object.defineProperty(exports, "__esModule", { value: true });
var ejs = __importStar(require("ejs"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var Viewer = /** @class */ (function () {
    function Viewer(filename, data) {
        this.filename = filename;
        this.data = data;
    }
    Viewer.make = function (filename, data) {
        return new Viewer(filename, data);
    };
    Viewer.prototype.display = function () {
        return ejs.render(this.getFile(this.filename), { filename: this.filename, data: this.data });
    };
    Viewer.prototype.getFile = function (filename) {
        return fs.readFileSync(path.join(__dirname, '..', '..', 'build', 'views', filename), 'utf8');
    };
    return Viewer;
}());
exports.default = Viewer;
