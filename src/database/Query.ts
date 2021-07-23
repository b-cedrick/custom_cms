import Database from "./Database";

class Query {
    table: string;

    constructor(table: string) {
        this.table = table;
    }

    async findAll() {
        try {
            const requestData = await Database.query(`SELECT * FROM ${this.table}`, [])
            return requestData;
        } catch (error) {
            console.log("Error in class query: findAll()")
            console.log(error);
        }
    }

    async find(fileds:any) {
        //TO FIX
        try {
            const requestData = await Database.query(`SELECT * FROM ${this.table} where _id = ?`, [fileds])
            return requestData;
        } catch (error) {
            console.log("Error in class query: find()")
            console.log(error);
        }
    }

    async findById(id: Number) {
        try {
            const requestData = await Database.query(`SELECT * FROM ${this.table} where _id = ?`, [id])
            return requestData[0];
        } catch (error) {
            console.log("Error in class query: find()")
            console.log(error);
        }
    }

}

export default Query;