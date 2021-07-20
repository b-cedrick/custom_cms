
import {IncomingMessage, ServerResponse} from "http";
import { MethodsEnum } from "./MethodsEnum";
import Route from "./Route";

class Router {    
   private static instance: Router;   
   private routes: Array<any> = [];
   
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

   public static checkRoute(req:IncomingMessage, res:ServerResponse) {
       const METHOD = req.method
       const URL = req.url
       const selectedRoute:any = this.getInstance().routes.filter((route:any)=> (route.method == METHOD && route.url == URL))
       if(selectedRoute && selectedRoute.length > 0) {
          return selectedRoute.pop().callback(req,res)
       } else {
          return this.getInstance().routes.filter((route:any)=> (route.url == "/404")).pop().callback(req,res)
       }
   }
   
}
export default Router