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
}

export default MainController