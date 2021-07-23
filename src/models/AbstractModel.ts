import Database from "../database/Database";
import Query from "../database/Query";
import Field from "../interfaces/Field";

abstract class AbstractModel{
    table: string;
    fields: Array<Field> = [];
    query: Query;
    selection: any = ['*']

    constructor(table: string, fields: Array<Field>) {
        this.table   = table;
        this.fields  = fields;
        this.query = new Query(this)
    }

    public async findAll() {
        // TO IMPROVE 
        const queryString:string = this.query.select(this.selection).from(this.table).toString()
        try {
            this.resetSelection()
            return await Database.query(queryString)
        } catch (error) {
            console.log("Error in class AbstractModel: findAll()")
            console.log(error);
        }
    }

    public async find(data:any) {  
        //TO FIX
        const queryString:string = this.query.select(this.selection).from(this.table).where([{_id: 1}]).toString()
        try {
            this.resetSelection()
            return await Database.query(queryString)
        } catch (error) {
            console.log("Error in class AbstractModel: find()")
            console.log(error);
        }
    }

    public async findById(id: Number) {     
        // TO IMPROVE 
        const queryString:string = this.query.select(this.selection).from(this.table).where([{_id: id}]).toString()
        try {
            this.resetSelection()
            const data:any = await Database.query(queryString)
            return data[0]
        } catch (error) {            
            console.log(error);
            return {error: error.toString()}
        }
    }

    private resetSelection(){
        this.selection = ['*']
    }

    public selectFields(data: any){
        this.selection = data
        return this
    }

    public excludeFields(data: any){
        let temp:any = []
        this.fields.map((item:any)=> {
            if(!data.includes(item.field)){
                temp.push(item.field)
            }
        })
        this.selection = [...temp]
        temp = []
        return this
    }
}

export default AbstractModel