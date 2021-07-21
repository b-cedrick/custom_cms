
import Router from "./Router";
import MainController from "../controllers/web/main.controller";
import ApiController from "../controllers/api";

class Routes {    
    static make() {
        //Route web
        Router.get('/', MainController.showMainPage)
        Router.get('/home', MainController.showHomePage)
        Router.get('/404', MainController.show404Page)

        // Route api
        Router.get('/api/user', ApiController.getUser)
        Router.get('/api/article', ApiController.getUser)
    }  
 }
 export default Routes