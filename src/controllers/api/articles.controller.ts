
import {article} from "../../models/articles.models"

class ArticlesController {
    public static async getArticle(id:number) {  
       return article.findById(id)
    }

    public static async getAllArticle() {  
        return article.findAll()
    }
}
export default ArticlesController