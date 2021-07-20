import {IncomingMessage, ServerResponse} from "http";
import Router from "./Router";
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

class Routes {    
    static make() {
        Router.get('/', (req: IncomingMessage, res:ServerResponse)=>{
            var htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views','main.ejs'), 'utf8');        
            var htmlRenderized = ejs.render(htmlContent, {filename: 'main.ejs', data: 'Main Page!'});
            res.end(htmlRenderized);
        })
        Router.get('/home', (req: IncomingMessage, res:ServerResponse)=>{
            var htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views','home.ejs'), 'utf8');        
            var htmlRenderized = ejs.render(htmlContent, {filename: 'main.ejs', data: 'Home Page!'});
            res.end(htmlRenderized);
        })
        Router.get('/404', (req: IncomingMessage, res:ServerResponse)=>{
            var htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views','page_404.ejs'), 'utf8');        
            var htmlRenderized = ejs.render(htmlContent, {filename: 'main.ejs', data: 'Page introuvable!'});
            res.end(htmlRenderized);
        })
    }   

 }
 export default Routes