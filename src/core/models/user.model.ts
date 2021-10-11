import { TypeFields } from "../enum/FieldsType";
import Field from "../interfaces/Field";
import ModelInterface from "../interfaces/ModelInterface";
import AbstractModel from "./AbstractModel";

class User extends AbstractModel implements ModelInterface {
    fields:Field[]
    constructor(table: string, fields: Field[]) { 
        super(table, fields); 
        this.fields = fields
    }   
}

export const user = new User('users', [
    {field: '_id', type:TypeFields.Number},
    {field: 'lastname', type:TypeFields.String},
    {field: 'firstname', type:TypeFields.String},
    {field: 'email', type:TypeFields.String},
    {field: 'password', type:TypeFields.String}
])