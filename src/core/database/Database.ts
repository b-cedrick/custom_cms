import Utils from "../utils/Utils";

const mysql = require('mysql2'); 
require('dotenv').config();

class Database {
    private static instance: Database
    // create the connection to database
    public connect = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE
    });

    public static getInstance(): Database{
        if(!this.instance) {
            this.instance = new Database()
        }
        return this.instance
    } 

    public static async query(query:string) {
        return await this.getInstance().connect.promise()
        .query(query)
        .then( ([rows,fields]:[any, any]) => {
        //   return rows ? Utils.sanitizeData(rows,fields) : []
            return rows
        })
        .catch((error:any)=> {
            console.log("Error : ", error)
        })
    }
}

export default Database