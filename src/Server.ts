import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";
import Router from "./route/Router";
import Request from "./Server/Request";
import Response from "./Server/Response";
require('dotenv').config();

/**
 * The Server class defines the `getInstance` method that lets clients access
 * the unique Server instance.
 */
 class Server {
    private static instance: Server;
    SERVER_ADDRESS:any = process.env.SERVER_ADDRESS || '0.0.0.0';
    SERVER_PORT:any = process.env.SERVER_PORT || 8000;
    
    /**
     * The Server's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the Server instance.
     *
     * This implementation let you subclass the Server class while keeping
     * just one instance of each subclass around.
     */

    private static getInstance(): Server {
        if (!this.instance) {
            this.instance = new Server();
        }        
        return this.instance;
    }
    /**
     * Finally, any Server should define some business logic, which can be
     * executed on its instance.
     */
      
    private checkRoute(req: Request) {
        const METHOD = req.method
        const URL = req.url        
        const selectedRoute:any= Router.getAll().filter((route:any)=> (route.method === METHOD && route.url === URL))            
           
        if(selectedRoute && selectedRoute.length > 0) {
           return selectedRoute[0].callback(req)           
        } else {
           return Router.getAll().find(elem => elem.url === "/404")?.callback(req)
        }
    }

    private startServer() {
        let server = http.createServer((request: IncomingMessage, response: ServerResponse)=>{
            const res = new Response(response)
            const req = new Request(request)
            return res.responseHandler(this.checkRoute(req))
        })
        server.listen(this.SERVER_PORT, this.SERVER_ADDRESS, () => {
        console.log(`🚀🚀Server is running on http://${this.SERVER_ADDRESS}:${this.SERVER_PORT}🚀🚀`);
        });
    }

    public static start(){
        this.getInstance().startServer()
    }
}
export default Server