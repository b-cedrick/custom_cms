import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';
class Viewer{

    public filename: string
    public data:any
    
    constructor(filename:string, data:any){
        this.filename = filename
        this.data = data
    }

    public static make(filename:string, data:any) {
        return new Viewer(filename, data)
    }

    public display() {       
        return ejs.render(this.getFile(this.filename), {filename: this.filename, data: this.data});
    }

    private getFile(filename: string): any {
        return fs.readFileSync(path.join(__dirname,'..','..', 'build','views',filename), 'utf8'); 
    }
}

export default Viewer