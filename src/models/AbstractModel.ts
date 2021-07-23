import Database from "../database/Database";
import Query from "../database/Query";
import Field from "../interfaces/Field";

abstract class AbstractModel{
    table: string;
    fields: Array<Field> = [];
    query: Query;
    selection: any = []

    constructor(table: string, fields: Array<Field>) {
        this.table   = table;
        this.fields  = fields;
        this.query = new Query(this)
    }

    public async findAll() {
        const queryString:string = this.query.select(this.selection).from(this.table).toString()
        return await this.runQuery(queryString)
    }

    public async find(data:any) {  
        //TO FIX
        const queryString:string = this.query.select(this.selection).from(this.table).where([{_id: 1}]).toString()
        return await this.runQuery(queryString)
    }

    public async findById(id: Number) {   
        const queryString:string = this.query.select(this.selection).from(this.table).where([{_id: id}]).toString()
        const data:any = await this.runQuery(queryString)
        return Array.isArray(data) ? data[0] : data
    }

    private resetSelection(){
        this.selection = ['*']
    }

    public selectFields(data: Array<any>){
        this.selection = data
        return this
    }

    public excludeFields(data: Array<any>){
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

    private async runQuery(queryString: string) {
        try {
            this.resetSelection()
            const data:any = await Database.query(queryString)
            return data
        } catch (error) {            
            console.log(error);
            return {error: error.toString()}
        }
    }
}

export default AbstractModel