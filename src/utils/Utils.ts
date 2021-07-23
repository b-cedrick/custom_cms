class Utils {
    constructor(){}
    public static sanitizeData(data:any, fields:any) {
        const item:any = {}
        const keys:any = fields.map((field: any) => field.name)
        if(Array.isArray(data)) {
            let temp:any = []
            data.map((elem:any)=>{
                keys.map((key:string)=>{
                    item[key] = elem[key]
                })
                temp.push({...item})
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
export default Utils