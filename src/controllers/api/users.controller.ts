import Database from "../../database/Database"

class UsersController {
    public static getUsers() {
        const query = 'SELECT * FROM `users` WHERE `_id` = ?'
        const params = [1]
       return Database.query(query, params)
    }
}
export default UsersController