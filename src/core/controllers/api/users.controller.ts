import { user } from "../../models/user.model"

class UsersController {
    public static async getAll() {
        const data: any =  await user.findAll()
        return data
    }
    public static async getUser(_id: number) {
        const data: any =  await user.findById(_id)
        return data
    }
}
export default UsersController