import { user } from "../../models/user.model"

class UsersController {
    public static async getUsers(id:number) {
        const data: any =  await user.findById(id)
        return data
    }
}
export default UsersController