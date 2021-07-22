import ArticlesController from "../../controllers/api/articles.controller"
import UsersController from "../../controllers/api/users.controller"
import Request from "../../Server/Request"
import Router from "../Router"

class RouteApi {
    constructor() {
        Router.get('/api/user', async ()=>{
            return await UsersController.getUsers()
        })
        Router.get('/api/article', async (req: Request)=>{
            return await ArticlesController.getAllArticle()
        })
        Router.get('/api/article/test', async (req: Request)=>{
            return await ArticlesController.getArticle(2)
        })
    }
}

export default RouteApi