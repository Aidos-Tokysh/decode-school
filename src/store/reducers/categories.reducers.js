import * as types from '../actions/types'
const initialState = {
    categories:[]
}
export default function categoriesReducers(state = initialState , action){
    switch(action.type){
        case types.SET_CATEGORIES:
            return {...state , categories: action.payload}
        default:
            return state
    }
}