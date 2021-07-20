import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

class Viewer{
    constructor(){}
    public static display(filename: String, data: any = {}) {
        const htmlContent = fs.readFileSync(path.join(__dirname,'..','..', 'build','views',filename.toString()), 'utf8');        
        const htmlRenderized = ejs.render(htmlContent, {filename, data});
        return htmlRenderized
    }
}

export default Viewer