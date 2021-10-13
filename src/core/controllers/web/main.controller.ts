import { article } from "../../models/articles.models";
import Request from "../../Server/Request";
import Viewer from "../../views/Viewer";

class MainController {    
    private constructor() { }

    public static showMainPage = async (req: Request)=>{   
      const data = await article.findAll()
      return Viewer.make('main.ejs', data)
    }

    public static showHomePage = async (req: Request)=>{
      return Viewer.make('home.ejs', {title:'Home Page!'})
    }

    public static show404Page = (req: Request)=>{      
      return Viewer.make('page_404.ejs', {title:'Page introuvable!'})
    }

    public static showArticlePage = async (req: Request)=>{ 
      const data:any = await article.findById(req.data._id)
      return Viewer.make('main.ejs', data)
    }


    public static showAllArticlePage = async (req: Request)=>{ 
      const data = await article.findAll()
      return Viewer.make('main.ejs', data)
    }
}

export default MainController