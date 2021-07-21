
import {IncomingMessage} from "http";

class ApiController {    
    private constructor() { }
    public static getUser = (req: IncomingMessage)=>{   
      return {nom: "Cédrick", email: "mail1@bidon.com"}
    }

    public static getArticles = (req: IncomingMessage)=>{
      return {title: "Mon premier articles"}
    }
}

export default ApiController