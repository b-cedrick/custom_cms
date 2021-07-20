import Routes from "./route/Routes";
import Server from "./Server";

Routes.build('get', '/',()=>{
    console.log("Main page")
})

Routes.build('get', '/home',()=>{
    console.log("Main page")
})

Routes.build('post', '/',()=>{
    console.log("post")
})

Routes.build('put', '/',()=>{
    console.log("put")
})

Routes.build('delete', '/',()=>{
    console.log("delete")
})

Server.start()