"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var articles_models_1 = require("../../models/articles.models");
var ArticlesController = /** @class */ (function () {
    function ArticlesController() {
    }
    ArticlesController.getArticle = function (id) {
        return articles_models_1.article.findAll();
    };
    ArticlesController.getAllArticles = function () {
        return articles_models_1.article.findAll();
    };
    return ArticlesController;
}());
exports.default = ArticlesController;
