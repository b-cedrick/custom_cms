import {IncomingMessage} from "http";

class Request {    
    public method: any
    public url: any

    constructor(req: IncomingMessage) {
        this.method = req.method
        this.url = req.url
    }       

}

export default Request