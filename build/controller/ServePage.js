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
var ServePage = /** @class */ (function () {
    function ServePage() {
        this.requestListener = function (req, res) {
            req.on('error', function (err) {
                console.error(err);
                // Handle error...
                res.statusCode = 400;
                res.end('400: Bad Request');
                return;
            });
            res.on('error', function (err) {
                console.error(err);
                // Handle error...
            });
            res.writeHead(200, { 'Content-Type': 'text/html' }); // http header
            var url = req.url;
            if (url === '/') {
                // res.write('<h1>about us page<h1>'); //write a response
                var htmlContent = fs.readFileSync(path.join(__dirname, '..', '..', 'build', 'views', 'main.ejs'), 'utf8');
                var htmlRenderized = ejs.render(htmlContent, { filename: 'main.ejs', data: 'Main Page!' });
                res.end(htmlRenderized);
            }
            else if (url === '/home') {
                var htmlContent = fs.readFileSync(path.join(__dirname, '..', '..', 'build', 'views', 'main.ejs'), 'utf8');
                var htmlRenderized = ejs.render(htmlContent, { filename: 'home.ejs', data: 'Home Page!' });
                res.end(htmlRenderized);
            }
            else {
                var htmlContent = fs.readFileSync(path.join(__dirname, '..', '..', 'build', 'views', 'main.ejs'), 'utf8');
                var htmlRenderized = ejs.render(htmlContent, { filename: 'page_404.ejs', data: 'Erreur 404!' });
                res.end(htmlRenderized);
            }
        };
    }
    return ServePage;
}());
exports.default = ServePage;
