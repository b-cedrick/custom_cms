import AbstractModel from "../models/AbstractModel";
class Query {
    private fields: Array<any> = [];
    private _join: string = "";
    private conditions: string = "";
    private action: string = "";
    private isDelete: boolean = false;
    private table: string = "";
    private fieldToSelect:Array<any> = []

    constructor(model:AbstractModel){
        this.table = model.table
        this.fields = model.fields
    }

    insert(arg: any){
        let keys:any = []
        let values:any = []
        for (const [key, value] of Object.entries(arg)) {
            console.log(`${key}: ${value}`);
            keys.push(key)
            values.push(value)
        }
        
        const query = "INSERT INTO " + this.table + "("+keys.join(', ') + ") VALUES (" +  values.map(function(value: any){
            return (typeof value == 'string') ?  "'" + value.replace(/'/g,"\\'") + "'" : value;
        }).join(', ')+")"
        console.log("query : ",query)
        this.table = ""
        return query
    }

    delete(){
        this.action = "DELETE ";
        this.isDelete = true;
        return this
    }

    update(arg: any){
        let query_part: string = ""
        for (const [key, value] of Object.entries(arg)) {
            console.log(`${key}: ${value}`);
            if(key != '_id') {
                query_part += " "+ key + " = " + ((typeof value == 'string') ?  "'" + value.replace(/'/g,"\\'") + "'" : value) + ','
            }            
        }
        query_part = query_part.replace(/.$/,"");
        const query = "UPDATE " + this.table + " SET" + query_part + this.conditions
        this.table = ""
        this.conditions = ""
        return query
    }
    
    select(args:any){
        this.action = 'SELECT ';
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
                if(key && index === 0) conditions += this.table + "." + key + " = " + args[key]
                if(key && index > 0) conditions += " AND "  + this.table + "." + key + " = '" + args[key] + "'"
            })
        } else{
            conditions += this.table + "." + keys[0] + " = '" + args[keys[0]] + "'"
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

    join(data:any){
        data.map( (item: any) => {
            if(item.inner) {
                this._join += ` INNER JOIN ${item.table} ON ${item.table}._id = ${this.table}.${item.field} `;
            } else if(item.left) {
                this._join += ` LEFT JOIN ${item.table} ON ${item.table}._id = ${this.table}.${item.field} `;
            } else if(item.right) {
                this._join += ` RIGHT JOIN ${item.table} ON ${item.table}._id = ${this.table}.${item.field} `;
            }     
        })
        return this;
    }

    toString(){
        const liestFields:string = this.isDelete ? '' : ((this.fieldToSelect.length > 0) ? this.fieldToSelect.join(', ') : '*')
        const query = this.action + liestFields
                            + ' FROM ' + this.table
                            + this._join
                            + this.conditions;
        this.fieldToSelect = []
        this.action = ""
        this.isDelete = false
        this._join = ""
        this.conditions = ""
        return query          
    }
}

export default Query;