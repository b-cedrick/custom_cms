import {ServerResponse} from "http";
import Viewer from "../views/Viewer";

class Response {    
    public res: ServerResponse

    constructor(res: ServerResponse) {
        this.res = res
    }        

    async responseHandler(data:any) {
        if(!Array.isArray(data) && data instanceof Viewer) {
            this.res.writeHead(200,{"Content-Type": "text/html; charset=UTF-8"})
            return this.res.end(data.display())
        } else {
            const d:any =  await Promise.resolve(data)
            this.res.writeHead(200,{"Content-Type": "application/json; charset=UTF-8"})
            return this.res.end(JSON.stringify(d))
        }        
    }
}

export default Response