import {ServerResponse} from "http";
import Viewer from "../views/Viewer";

class Response {    
    public res: ServerResponse

    constructor(res: ServerResponse) {
        this.res = res
    }        

    async responseHandler(data:any) {
        const d:any =  await Promise.resolve(data)
        if(!Array.isArray(d) && d instanceof Viewer) {
            this.res.writeHead(200,{"Content-Type": "text/html; charset=UTF-8"})
            return this.res.end(d.display())
        } else {
            this.res.writeHead(200,{"Content-Type": "application/json; charset=UTF-8"})
            return this.res.end(JSON.stringify(d))
        }        
    }
}

export default Response