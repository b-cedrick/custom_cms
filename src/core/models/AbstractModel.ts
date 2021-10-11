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

    public async find(data:Array<Object> | Object) {  
        // To IMPROVE (force find() method to accept anything else than Array or Object)
        const queryString:string = this.query.select(this.selection).from(this.table).where(data).toString()
        return await this.runQuery(queryString)
    }

    public async findById(id: number) {   
        const queryString:string = this.query.select(this.selection).from(this.table).where([{_id: id}]).toString()
        const data:any = await this.runQuery(queryString)
        return Array.isArray(data) ? data[0] : data
    }

    public async add(data: any) {
        const queryString:string = this.query.from(this.table).insert(data)
        return await this.runQuery(queryString)
    }

    public async update(data: any) {
        const queryString:string = this.query.from(this.table).where({_id: data._id}).update(data)
        return await this.runQuery(queryString)
    }

    public async delete(data: any) {
        const queryString:string = this.query.delete().from(this.table).where(data).toString()
        return await this.runQuery(queryString)
    }

    private resetSelection(){
        this.selection = []
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
        } catch (error: any) {            
            console.log(error);
            return {error: error.toString()}
        }
    }
}

export default AbstractModel