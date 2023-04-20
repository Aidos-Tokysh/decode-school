import {all , put , takeLatest} from 'redux-saga/effects'
import * as types from '../actions/types'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

function* getCategories(){
    try{
        const data = yield axios.get('http://3.72.149.127:3005/api/blog-types').then(res=>res.data)
        yield put({type:types.SET_CATEGORIES,payload: data})
    }catch(e){
        alert(JSON.stringify(e))
    }
}
export function* categoriesSaga(){
    yield all([
        yield takeLatest(types.GET_CATEGORIES ,getCategories),
    ])
}