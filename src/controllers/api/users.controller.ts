import Database from "../../database/Database"
import Utils from "../../utils/Utils"

class UsersController {
    public static getUsers() {
        const query = 'SELECT * FROM `users` WHERE `_id` = ?'
        const params = [1]
       return Database.connect().conn.promise()
        .query(query,params)
        .then( ([rows,fields]:[any, any]) => {
            console.log("Rows : ", rows)
          return rows ? Utils.sanitizeData(rows,fields) : []
        })
        .catch((error:any)=> {
            console.log("Error : ", error)
        })
    }
}
export default UsersController