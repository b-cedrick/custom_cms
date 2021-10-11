import { TypeFields } from "../enum/FieldsType";
import Field from "../interfaces/Field";
import ModelInterface from "../interfaces/ModelInterface";
import AbstractModel from "./AbstractModel";

class Articles extends AbstractModel implements ModelInterface {
    fields:Field[]
    constructor(table: string, fields: Field[]) { 
        super(table, fields); 
        this.fields = fields
    }   
}

export const article = new Articles('articles', [
    {field: '_id', type:TypeFields.Number},
    {field: 'title', type:TypeFields.String},
    {field: 'content', type:TypeFields.String}
])