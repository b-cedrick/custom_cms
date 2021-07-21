
import {IncomingMessage} from "http";
import Database from "../../database/Database";

class ApiController {    
    private constructor() { }
    public static getUser = (req: IncomingMessage)=>{   
      return {nom: "Cédrick", email: "mail1@bidon.com"}
    }

    public static getArticles = async (req: IncomingMessage)=>{
      const data:any = await Database.getArticle()
      return data
    }
}

export default ApiController