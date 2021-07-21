import MainController from "../../controllers/web/main.controller"
import Router from "../Router"

class RoutesWeb {
    constructor() {
        Router.get('/', MainController.showMainPage)
        Router.get('/home', MainController.showHomePage)
        Router.get('/404', MainController.show404Page)
    }
}
export default RoutesWeb