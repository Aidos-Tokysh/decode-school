import * as types from './types'
export function signUp(payload){
    return({type: types.REGISTER_USER , payload})
}
export function signIn(payload){
    return({type: types.LOGIN_USER , payload})
}
export function setIsAuth(){
    return({type: types.SET_IS_AUTH})
}