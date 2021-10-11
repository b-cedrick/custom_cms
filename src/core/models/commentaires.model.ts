import { TypeFields } from "../enum/FieldsType";
import Field from "../interfaces/Field";
import ModelInterface from "../interfaces/ModelInterface";
import AbstractModel from "./AbstractModel";

class Commentaire extends AbstractModel implements ModelInterface {
    fields:Field[]
    constructor(table: string, fields: Field[]) { 
        super(table, fields); 
        this.fields = fields
    }   
}

export const commentaire = new Commentaire('commentaires', [
    {field: '_id', type:TypeFields.Number},
    {field: 'user_id', type:TypeFields.Number},
    {field: 'article_id', type:TypeFields.Number},
    {field: 'content', type:TypeFields.String}
])