import MainController from "../../controllers/web/main.controller"
import Router from "../Router"

class RoutesWeb {
    constructor() {
        Router.get('/', MainController.showMainPage)
        Router.get('/article', MainController.showArticlePage)
        Router.get('/article/all', MainController.showAllArticlePage)
        Router.get('/home', MainController.showHomePage)
        Router.get('/404', MainController.show404Page)
    }
}
export default RoutesWeb