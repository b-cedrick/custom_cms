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
var http = __importStar(require("http"));
var ejs = __importStar(require("ejs"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
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
        /**
         * Finally, any Server should define some business logic, which can be
         * executed on its instance.
         */
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
    /**
     * The static method that controls the access to the Server instance.
     *
     * This implementation let you subclass the Server class while keeping
     * just one instance of each subclass around.
     */
    Server.getInstance = function () {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    };
    Server.prototype.startServer = function () {
        var _this = this;
        var server = http.createServer(this.requestListener);
        server.listen(this.SERVER_PORT, this.SERVER_ADDRESS, function () {
            console.log("\uD83D\uDE80\uD83D\uDE80Server is running on http://" + _this.SERVER_ADDRESS + ":" + _this.SERVER_PORT + "\uD83D\uDE80\uD83D\uDE80");
        });
    };
    return Server;
}());
exports.default = Server;
