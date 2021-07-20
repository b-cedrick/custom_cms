
import Router from "./Router";
import MainController from "../controllers/main.controller";

class Routes {    
    static make() {
        Router.get('/', MainController.showMainPage)
        Router.get('/home', MainController.showHomePage)
        Router.get('/404', MainController.show404Page)
    }  
 }
 export default Routes