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
var Router_1 = __importDefault(require("./Router"));
var ejs = __importStar(require("ejs"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.make = function () {
        Router_1.default.get('/', function (req, res) {
            var htmlContent = fs.readFileSync(path.join(__dirname, '..', '..', 'build', 'views', 'main.ejs'), 'utf8');
            var htmlRenderized = ejs.render(htmlContent, { filename: 'main.ejs', data: 'Main Page!' });
            res.end(htmlRenderized);
        });
        Router_1.default.get('/404', function (req, res) {
            var htmlContent = fs.readFileSync(path.join(__dirname, '..', '..', 'build', 'views', 'main.ejs'), 'utf8');
            var htmlRenderized = ejs.render(htmlContent, { filename: 'main.ejs', data: 'Main Page!' });
            res.end(htmlRenderized);
        });
    };
    return Routes;
}());
exports.default = Routes;
