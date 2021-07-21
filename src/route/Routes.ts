import RouteApi from "./api/RouteApi";
import RoutesWeb from "./web/RoutesWeb";

class Routes {    
    static make() {
        //Route web
        new RoutesWeb()

        // Route api
        new RouteApi()
    }  
 }
 export default Routes