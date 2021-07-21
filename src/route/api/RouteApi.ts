import ApiController from "../../controllers/api"
import Router from "../Router"

class RouteApi {
    constructor() {
        Router.get('/api/user', ApiController.getUser)
        Router.get('/api/article', ApiController.getArticles)
    }
}

export default RouteApi