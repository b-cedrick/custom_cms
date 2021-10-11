import ArticlesController from "../../controllers/api/articles.controller"
import CommentairesController from "../../controllers/api/commentaires.controller"
import UsersController from "../../controllers/api/users.controller"
import Request from "../../Server/Request"
import Router from "../Router"

class RouteApi {
    constructor() {

        /***************** User *******************/

        /******************* GET **********************/
        Router.get('/api/user', async (req: Request)=>{
            return await UsersController.getUser(req.data)
        })
        Router.get('/api/user/all', async (req: Request)=>{
            return await UsersController.getAll()
        })
        /***********************************************/
        /***********************************************/

        /***************** Articles *******************/

        /******************* GET **********************/
        Router.get('/api/article/all', async (req: Request)=>{
            return await ArticlesController.getAllArticles()
        })
        Router.get('/api/article/test', async (req: Request)=>{
            return await ArticlesController.getArticle(req.data)
        })
        Router.get('/api/article', async (req: Request)=>{
            return await ArticlesController.getArticle(req.data._id)
        })
        /***********************************************/

        /******************* POST **********************/
        Router.post('/api/article/add', async (req: Request)=>{
            return await ArticlesController.addArticle(req.data)
        })
        /***********************************************/

        /******************* PATCH **********************/
        // Router.patch('/api/article', async (req: Request)=>{
        //     return await ArticlesController.updateArticles(req.data._id)
        // })
        /***********************************************/

        /******************* PUT **********************/
        Router.put('/api/article/update', async (req: Request)=>{
            return await ArticlesController.updateArticles(req.data)
        })
        /***********************************************/

        /******************* DELETE **********************/
        Router.delete('/api/article/delete', async (req: Request)=>{
            return await ArticlesController.deleteArticles(req.data)
        })
        /***********************************************/
        /***********************************************/

        /***************** Commentaires *******************/
        
        /******************* GET **********************/
        Router.get('/api/commentaire/all', async (req: Request)=>{
            return await CommentairesController.getAllCommentaires()
        })
        Router.get('/api/commentaire/test', async (req: Request)=>{
            return await CommentairesController.getCommentaire(req.data)
        })
        Router.get('/api/commentaire', async (req: Request)=>{
            return await CommentairesController.getCommentaire(req.data._id)
        })
        /***********************************************/

        /******************* POST **********************/
        Router.post('/api/commentaire/add', async (req: Request)=>{
            return await CommentairesController.addCommentaire(req.data)
        })
        /***********************************************/

        /******************* PATCH **********************/
        // Router.patch('/api/commentaire', async (req: Request)=>{
        //     return await CommentairesController.updateCommentaires(req.data._id)
        // })
        /***********************************************/

        /******************* PUT **********************/
        Router.put('/api/commentaire/update', async (req: Request)=>{
            return await CommentairesController.updateCommentaires(req.data)
        })
        /***********************************************/

        /******************* DELETE **********************/
        Router.delete('/api/commentaire/delete', async (req: Request)=>{
            return await CommentairesController.deleteCommentaires(req.data)
        })
        /***********************************************/
        /***********************************************/


    }
}

export default RouteApi