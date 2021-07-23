
import {article} from "../../models/articles.models"

class ArticlesController {
    public static getArticle(id:number) {  
       return article.findById(id)
    }

    public static getAllArticles() {  
        return article.findAll()
    }
}
export default ArticlesController