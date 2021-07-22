
const mysql = require('mysql2'); 
require('dotenv').config();

class Database {
    private static instance: Database
    // create the connection to database
    public conn = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE
    });

    public static connect(){
        if(!this.instance) {
            this.instance = new Database()
        }
        return this.instance
    } 
}

export default Database