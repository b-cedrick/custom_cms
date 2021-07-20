import { RouteInterface } from "../interfaces";

class Route implements RouteInterface {    
    private static instance: Route;  
    method: String;
    url: String;
    callback: any;
    
    public constructor(method: String, url: String, callback: any) { 
        this.method = method
        this.url = url
        this.callback = callback
    } 

    // public static add(method: String, url:String, callback:any) {   

    // }
 }
 export default Route