import Query from "../database/Query";
import Field from "../interfaces/Field";

abstract class AbstractModel{
    table: string;
    fields: Array<Field> = [];
    query: any;

    constructor(table: string, fields: Array<Field>) {
        this.table   = table;
        this.fields  = fields;
        this.query   = new Query(table)
    }

    public findAll() {
        const query = new Query(this.table); 
        return query.findAll();
    }

    public find(fieldsToselect:any) {
        const query = new Query(this.table); 
        return query.find(fieldsToselect);
    }

    public findById(id: Number) {
        const query = new Query(this.table); 
        return query.findById(id);
    }
}

export default AbstractModel