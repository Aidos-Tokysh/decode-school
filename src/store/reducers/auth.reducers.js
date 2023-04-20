import * as types from '../actions/types'
const initialState = {
    user: null,
    error : {},
    isAuth: false
}
export default function authReducers(state = initialState , action){
    switch(action.type){
        case types.SUCCESS_REGISTER_USER:
            return {...state , user: action.payload}
        case types.FAIL_REGISTER_USER:
            return {...state , error: action.payload}
        case types.SUCCESS_LOGIN_USER:
            return {...state , user: action.payload}
        case types.FAIL_LOGIN_USER:
            return {...state , error: action.payload}
        case types.SET_IS_AUTH:
            const token = localStorage.getItem("token")
            let isAuth = token ? true : false
            return {...state , isAuth}
        default:
            return state
    }
}