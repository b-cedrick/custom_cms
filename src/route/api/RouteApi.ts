import ArticlesController from "../../controllers/api/articles.controller"
import UsersController from "../../controllers/api/users.controller"
import Request from "../../Server/Request"
import Router from "../Router"

class RouteApi {
    constructor() {
        /******************* GET **********************/
        Router.get('/api/user', async (req: Request)=>{
            return await UsersController.getUser(req.data)
        })
        Router.get('/api/user/all', async (req: Request)=>{
            return await UsersController.getAll()
        })
        Router.get('/api/article', async (req: Request)=>{
            return await ArticlesController.getAllArticles()
        })
        Router.get('/api/article/test', async (req: Request)=>{
            return await ArticlesController.getArticle(req.data)
        })
        /***********************************************/

        /******************* POST **********************/
        Router.post('/api/article', async (req: Request)=>{
            return await ArticlesController.addArticle(req.data)
        })
        /***********************************************/

        /******************* PATCH **********************/
        Router.patch('/api/article', async (req: Request)=>{
            return await ArticlesController.updateArticles(req.data._id)
        })
        /***********************************************/

        /******************* PUT **********************/
        Router.put('/api/article', async (req: Request)=>{
            return await ArticlesController.deleteArticles(req.data._id)
        })
        /***********************************************/

        /******************* DELETE **********************/
        Router.delete('/api/article/', async (req: Request)=>{
            return await ArticlesController.getAllArticles()
        })
        /***********************************************/


    }
}

export default RouteApi