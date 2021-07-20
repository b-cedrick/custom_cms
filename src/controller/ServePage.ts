
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

class ServePage {    
    private constructor() { }
     
     requestListener = function (req: any, res:any) {
        req.on('error', (err:any) => {
            console.error(err);
            // Handle error...
            res.statusCode = 400;
            res.end('400: Bad Request');
            return;
        });
    
        res.on('error', (err:any) => {
            console.error(err);
            // Handle error...
        });

        res.writeHead(200, {'Content-Type': 'text/html'}); // http header

        var url = req.url;
         if(url ==='/'){
            // res.write('<h1>about us page<h1>'); //write a response
            var htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views','main.ejs'), 'utf8');        
            var htmlRenderized = ejs.render(htmlContent, {filename: 'main.ejs', data: 'Main Page!'});
            res.end(htmlRenderized);
         }else if(url ==='/home'){
            var htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views','main.ejs'), 'utf8');        
            var htmlRenderized = ejs.render(htmlContent, {filename: 'home.ejs', data: 'Home Page!'});
            res.end(htmlRenderized);
         }else{
            var htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views','main.ejs'), 'utf8');        
            var htmlRenderized = ejs.render(htmlContent, {filename: 'page_404.ejs', data: 'Erreur 404!'});
            res.end(htmlRenderized);
         }
     };

}

export default ServePage