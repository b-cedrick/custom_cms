// import { IncomingMessage, ServerResponse } from "http"

/** 1er méthode **/
// export interface RouteInterface {
//    method: String,
//    url: String,
//    callback: any
// }

/** 2ème méthode **/
export type RouteInterface = {
   method: String,
   url: String,
   callback: any
}

// export type IRequest = IncomingMessage

// export type IResponse = ServerResponse