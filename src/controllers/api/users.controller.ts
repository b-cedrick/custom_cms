import Database from "../../database/Database"
import { user } from "../../models/user.model"
// import Utils from "../../utils/Utils"

class UsersController {
    public static async getUsers(id:number) {
        const data: any =  await user.findById(id)
        return data
    }
}
export default UsersController