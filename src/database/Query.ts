import AbstractModel from "../models/AbstractModel";
class Query {
    private fields: Array<any> = [];
    private conditions: string = "";
    private table: string;
    private fieldToSelect:Array<any> = []

    constructor(model:AbstractModel){
        this.table = model.table
        this.fields = model.fields
    }

    select(args:any){
        this.fieldToSelect = args;
        return this;
    }

    where(args:any){        
        let conditions:string = ""
        if((typeof args === 'object') && !Array.isArray(args)) {
            conditions += " (" +this.and(args) + ")"
        } else if(Array.isArray(args)){
            args.map((arg: any, index:number) => {
                if(arg && index === 0) conditions += " (" +this.and(arg) + ")" 
                if(arg && index > 0) conditions += " OR "  +  " (" +this.and(arg) + ")"    
            })  
        }

        if(conditions) this.conditions += " WHERE " + conditions

        return this;
    }

    and(args:any){
        let conditions:string = ""
        const keys:any = Object.keys(args)
        if(keys && keys.length > 1) {
            keys.map((key: any, index:number) => {
                if(key && index === 0) conditions += key + " = " + args[key]
                if(key && index > 0) conditions += " AND "  + key + " = '" + args[key] + "'"
            })
        } else{
            conditions += keys[0] + " = '" + args[keys[0]] + "'"
        } 
        return conditions;
    }

    from(table:any, alias:any = null){
        if(!alias){
            this.table = table;
        }else{
            this.table = `${table} AS ${alias}`;
        }
        return this;
    }

    toString(){
        const liestFields:string = (this.fieldToSelect.length > 0) ? this.fieldToSelect.join(', ') : '*'
        const query = 'SELECT '+ liestFields
                            + ' FROM ' + this.table
                            + this.conditions;
        this.fieldToSelect = []
        this.table = ""
        this.conditions = ""
        return query          
    }
}

export default Query;