import AbstractModel from "../models/AbstractModel";
import Database from "./Database";

class Query {
    private fields: any = [];
    private conditions: string = "";
    private table: string;
    private fieldToSelect:any = []

    constructor(model:AbstractModel){
        this.table = model.table
        this.fields = model.fields
    }

    select(args:any){
        this.fieldToSelect = args;
        return this;
    }

    where(args:any){
        args.map((arg: any) => {
            const key:any = Object.keys(arg).pop()
            if(key) {
                this.conditions += " WHERE " + key + " = " + arg[key]
            }        
        })  
        return this;
    }

    andWhere(args:any){
        args.map((arg: any) => {
            const key:any = Object.keys(arg).pop()
            if(key) {
                this.conditions += " AND " + key + " = " + arg[key]
            }        
        })  
        return this;
    }

    orWhere(args:any){
        args.map((arg: any) => {
            const key:any = Object.keys(arg).pop()
            if(key) {
                this.conditions += " OR " + key + " = " + arg[key]
            }        
        })  
        return this;
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
        const query = 'SELECT '+ this.fieldToSelect.join(', ')
                            + ' FROM ' + this.table
                            + this.conditions;
        this.fieldToSelect = []
        this.table = ""
        this.conditions = ""
        return query          
    }
}

export default Query;