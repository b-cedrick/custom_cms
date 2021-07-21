
const mysql = require('mysql2'); 
require('dotenv').config();

class Database {
    // create the connection to database
    private static connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE
    });

    public static getArticle() {
        const query = 'SELECT * FROM `articles` WHERE `_id` = ?'
        const params = [1]
        // const query = 'SELECT _id, title, post_date, content FROM `articles`'
        // with placeholder
       return this.connection.promise()
        .query(query,params)
        .then( ([rows,fields]:[any, any]) => {
          return rows ? this.sanitizeData(rows,fields) : []
        })
        .catch((error:any)=> {
            console.log("Error : ", error)
        })
    }

    private static sanitizeData(data:any, fields:any) {
        const item:any = {}
        const keys:any = fields.map((field: any) => field.name)
        if(Array.isArray(data)) {
            let temp:any = []
            data.map((elem:any)=>{
                keys.map((key:string)=>{
                    item[key] = elem[key]
                })
                temp.push(item)
            })
            return temp
        } else {
            keys.map((key:string)=>{
                item[key] = data[key]
            })
            return item
        }
    }
}

export default Database