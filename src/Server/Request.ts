import {IncomingMessage} from "http";
const url = require('url');

class Request {    
    public req: IncomingMessage
    public method: any
    public url: any
    // public data: any

    constructor(req: IncomingMessage) {
        this.req = req
        this.method = req.method
        this.url = req.url
        // this.data = url.parse(req.url,true);
    }       

}

export default Request