
import {article} from "../../models/articles.models"

class ArticlesController {
    public static async getArticle(id:number) { 
        return await article.selectFields(['_id','title','content']).findById(id)
    }

    public static async getAllArticles() {  
        return await article.findAll()
    }

    public static async addArticle(data:any) {  
        console.log("DATA :",data, {success: true, message: "Ajout effectué avec succès"})
        return await {success: true, message: "Ajout effectué avec succès"}
    }

    public static async updateArticles(_id:number) { 
        console.log({success: true, message: "Mise à jour effectué avec succès"})
        return await {success: true, message: "Mise à jour effectué avec succès"}
    }

    public static async deleteArticles(_id:number) {  
        console.log({success: true, message: "Article supprimé avec succès"})        
        return await {success: true, message: "Article supprimé avec succès"}
    }
}
export default ArticlesController