
import {commentaire} from "../../models/commentaires.model"

class CommentairesController {
    public static async getCommentaire(id:number) { 
        return await commentaire.selectFields(['_id','user_id','article_id','content']).findById(id)
    }

    public static async getAllCommentaires() {  
        return await commentaire.findAll()
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