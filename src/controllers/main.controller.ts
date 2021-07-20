
import {IncomingMessage, ServerResponse} from "http";
import Viewer from "../views/Viewer";

class MainController {    
    private constructor() { }
    public static showMainPage = (req: IncomingMessage, res:ServerResponse)=>{       
      const view = Viewer.display('main.ejs', {title:'Main Page'})
      res.end(view)
    }

    public static showHomePage = (req: IncomingMessage, res:ServerResponse)=>{
      const view = Viewer.display('home.ejs', {title:'Home Page!'})
      res.end(view)
    }

    public static show404Page = (req: IncomingMessage, res:ServerResponse)=>{      
      const view = Viewer.display('page_404.ejs', {title:'Page introuvable!'})
      res.end(view)
    }
}

export default MainController