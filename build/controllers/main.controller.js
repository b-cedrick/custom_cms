"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Viewer_1 = __importDefault(require("../views/Viewer"));
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.showMainPage = function (req, res) {
        var view = Viewer_1.default.display('main.ejs', { title: 'Main Page' });
        res.end(view);
    };
    MainController.showHomePage = function (req, res) {
        var view = Viewer_1.default.display('home.ejs', { title: 'Home Page!' });
        res.end(view);
    };
    MainController.show404Page = function (req, res) {
        var view = Viewer_1.default.display('page_404.ejs', { title: 'Page introuvable!' });
        res.end(view);
    };
    return MainController;
}());
exports.default = MainController;
