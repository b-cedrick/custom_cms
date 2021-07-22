import Database from "../../database/Database"
import Utils from "../../utils/Utils"

class ArticlesController {
    public static getArticle() {
        const query = 'SELECT * FROM `articles` WHERE `_id` = ?'
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
export default ArticlesController