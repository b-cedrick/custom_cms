import {IncomingMessage} from "http";
import { MethodsEnum } from "../enum/MethodsEnum";
const url = require('url');
class Request {    
    public req: IncomingMessage
    public method: any
    public url: any
    public data: any

    constructor(req: IncomingMessage) {
        this.req = req
        this.method = req.method
        this.url = req.url
    }       

    async parseBody(req:IncomingMessage) {  
        return new Promise(function(resolve, reject) {     
            let body:string = ''
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                body = body ? JSON.parse(body) : body;   
                resolve(body ? body : {})
            });
        })
    }
    
    parseParams(strParams: string) {
        return JSON.parse('{"' + strParams.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    }

    async setData(req: IncomingMessage) {
        switch (req.method) {
            case MethodsEnum.Get: 
                this.url = url.parse(req.url).pathname
                this.data = url.parse(req.url).query ? this.parseParams(url.parse(req.url).query) : {}
                break;
            case MethodsEnum.Post:
                this.data = await Promise.resolve(this.parseBody(req))
                break;
            case MethodsEnum.Patch: 
                this.data = await Promise.resolve(this.parseBody(req))    
                break;
            case MethodsEnum.Put: 
                this.data = await Promise.resolve(this.parseBody(req))    
                break;
            case MethodsEnum.Delete: 
                this.data = await Promise.resolve(this.parseBody(req))               
                break;        
            default:
                break;
        }        
    }

    public static async instance(req: IncomingMessage){
        const request = new Request(req)
        await request.setData(req)
        return request
    }
}

export default Request 