import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

class Viewer{
    // private static 
    constructor(){}
    public static display(filename: string, data: any = {}) {              
        return ejs.render(this.getFile(filename), {filename, data});
    }

    private static getFile(filename: string): any {
        return fs.readFileSync(path.join(__dirname,'..','..', 'build','views',filename), 'utf8'); 
    }
}

export default Viewer