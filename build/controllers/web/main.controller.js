"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Viewer_1 = __importDefault(require("../../views/Viewer"));
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.showMainPage = function (req) {
        return Viewer_1.default.make('main.ejs', { title: 'Main Page' });
    };
    MainController.showHomePage = function (req) {
        return Viewer_1.default.make('home.ejs', { title: 'Home Page!' });
    };
    MainController.show404Page = function (req) {
        return Viewer_1.default.make('page_404.ejs', { title: 'Page introuvable!' });
    };
    return MainController;
}());
exports.default = MainController;
