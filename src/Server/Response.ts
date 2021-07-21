import {ServerResponse} from "http";
import Viewer from "../views/Viewer";

class Response {    
    public res: ServerResponse

    constructor(res: ServerResponse) {
        this.res = res
    }        

    responseHandler(data:any) {
        if(data instanceof Viewer) {
            this.res.writeHead(200,{"Content-Type": "text/html"})
            return this.res.end(data.display())
        } else {
            this.res.writeHead(200,{"Content-Type": "application/json"})
            return this.res.end(JSON.stringify(data))
        }        
    }
}

export default Response