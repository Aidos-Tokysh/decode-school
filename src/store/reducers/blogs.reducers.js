import * as types from '../actions/types'
const initialState = {
    blogs:[],
    error:{},
}
export default function blogsReducers(state = initialState , action){
    switch(action.type){
        case types.SUCCESS_CREATE_BLOG:
            return {...state , blogs: action.payload}
        case types.FAIL_CREATE_BLOG:
            return {...state , blogs: action.payload}
        case types.SUCCESS_GET_ALL_BLOGS:
            return {...state , blogs: action.payload}
        case types.FAIL_GET_ALL_BLOGS:
            return {...state , error: action.payload}
        case types.SUCCESS_GET_USER_BLOGS:
            return {...state , userBlogs: action.payload} 
        case types.FAIL_GET_USER_BLOGS:
            return {...state , error: action.payload}            
        
        default:

            return state
    }
}