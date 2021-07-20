import * as http from "http";
import Route from "./route/Router";
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
      
    private requestListener = function (req: any, res:any) {
        const routerInstance:Route = Route.getInstance()
        routerInstance.route(req,res)
    }  

    private startServer() {
        let server = http.createServer(this.requestListener);
        server.listen(this.SERVER_PORT, this.SERVER_ADDRESS, () => {
        console.log(`🚀🚀Server is running on http://${this.SERVER_ADDRESS}:${this.SERVER_PORT}🚀🚀`);
        });
    }

    public static start(){
        this.getInstance().startServer()
    }
}
export default Server