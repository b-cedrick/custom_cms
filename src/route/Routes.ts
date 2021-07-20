import { RouteInterface } from "../interfaces";
import Router from "./Router";
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

class Routes {    
    static make() {
        Router.get('/', (req: any, res:any)=>{
            var htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views','main.ejs'), 'utf8');        
            var htmlRenderized = ejs.render(htmlContent, {filename: 'main.ejs', data: 'Main Page!'});
            res.end(htmlRenderized);
        })
    }   

 }
 export default Routes