
import {commentaire} from "../../models/commentaires.model"

class CommentairesController {
    public static async getCommentaireById(id:number) { 
        return await commentaire.innerJoin({table: "articles", field: "article_id"}).innerJoin({table: "users", field: "user_id"}).findById(id)
    }

    public static async getCommentaire(data: any) { 
        console.log("TESTTTTT :", data)
        return await commentaire.innerJoin({table: "articles", field: "article_id"}).innerJoin({table: "users", field: "user_id"}).find(data)
    }

    public static async getAllCommentaires() {  
        return await commentaire.innerJoin({table: "articles", field: "article_id"}).innerJoin({table: "users", field: "user_id"}).findAll()
    }

    public static async addCommentaire(data:any) {  
        const res = await commentaire.add(data)
        // console.log("DATA :",data, res, {success: true, message: "Ajout effectué avec succès"})
        return await {success: true, message: "Ajout effectué avec succès"}
    }

    public static async updateCommentaires(data:any) { 
        const res = await commentaire.update(data)
        return await {success: true, message: "Mise à jour effectué avec succès"}
    }

    public static async deleteCommentaires(data:any) {  
        const res = await commentaire.delete(data)
        // console.log({success: true, message: "Commentaire supprimé avec succès"})        
        return await {success: true, message: "Commentaire supprimé avec succès"}
    }
}
export default CommentairesController