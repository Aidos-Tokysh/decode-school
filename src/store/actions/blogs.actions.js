import * as types from "./types"
export function createBlog(payload){
    return({type:types.CREATE_BLOG, payload})
}
export function getAllBlogs(){
    return({type:types.GET_ALL_BLOGS})
}
export function getUserBlogs(payload){
    return({type:types.GET_USER_BLOGS,payload})
}
