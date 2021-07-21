import {IncomingMessage} from "http";

class Request {    
    public req: IncomingMessage
    public method: any
    public url: any

    constructor(req: IncomingMessage) {
        this.req = req
        this.method = req.method
        this.url = req.url
    }       

}

export default Request