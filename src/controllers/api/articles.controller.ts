
import {article} from "../../models/articles.models"

class ArticlesController {
    public static async getArticle(id:number) { 
        return await article.selectFields(['_id','title','content']).findById(id)
    }

    public static async getAllArticles() {  
        return await article.findAll()
    }
}
export default ArticlesController