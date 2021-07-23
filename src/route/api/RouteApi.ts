import ArticlesController from "../../controllers/api/articles.controller"
import UsersController from "../../controllers/api/users.controller"
import Request from "../../Server/Request"
import Router from "../Router"

class RouteApi {
    constructor() {
        Router.get('/api/user', async (req: Request)=>{
            return await UsersController.getUsers(1)
        })
        Router.get('/api/article', async (req: Request)=>{
            return await ArticlesController.getAllArticles()
        })
        Router.get('/api/article/test', async (req: Request)=>{
            return await ArticlesController.getArticle(1)
        })
    }
}

export default RouteApi