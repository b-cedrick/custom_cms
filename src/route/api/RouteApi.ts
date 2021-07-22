import ArticlesController from "../../controllers/api/articles.controller"
import UsersController from "../../controllers/api/users.controller"
import Router from "../Router"

class RouteApi {
    constructor() {
        Router.get('/api/user', async ()=>{
            return await UsersController.getUsers()
        })
        Router.get('/api/article', async ()=>{
            return await ArticlesController.getArticle()
        })
    }
}

export default RouteApi