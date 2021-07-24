import { article } from "../../models/articles.models";
import Request from "../../Server/Request";
import Viewer from "../../views/Viewer";

class MainController {    
    private constructor() { }

    public static showMainPage = (req: Request)=>{   
      return Viewer.make('main.ejs', {title:'Main Page'})
    }

    public static showHomePage = (req: Request)=>{
      return Viewer.make('home.ejs', {title:'Home Page!'})
    }

    public static show404Page = (req: Request)=>{      
      return Viewer.make('page_404.ejs', {title:'Page introuvable!'})
    }

    public static showArticlePage = async (req: Request)=>{ 
      console.log("REQ DATA : ", req.data)
      const data:any = await article.findById(req.data._id)
      return Viewer.make('main.ejs', data)
    }
}

export default MainController