
import {IncomingMessage, ServerResponse} from "http";
import { MethodsEnum } from "./MethodsEnum";
import Route from "./Route";

class Router {    
   private static instance: Router;   
   public routes: Array<any> = [];
   
   private constructor() { }
   
   private static getInstance(): Router {
       if (!this.instance) {
           this.instance = new Router();
       }        
       return this.instance;
   }

   public createRoute(method: String, url:String, callback:any){
     this.routes.push(new Route(method, url, callback))
   }

   public static get(url:String,callback:any){
        this.getInstance().createRoute(MethodsEnum.Get, url, callback)
   }

   public static post(url:String,callback:any){
        this.getInstance().createRoute(MethodsEnum.Post, url, callback)
   }

   public static put(url:String,callback:any){
        this.getInstance().createRoute(MethodsEnum.Put, url, callback)
   }

   public static delete(url:String,callback:any){
        this.getInstance().createRoute(MethodsEnum.Delete, url, callback)
   }  

   public static getAll():Route[]{
        return this.getInstance().routes
   }
   
}
export default Router