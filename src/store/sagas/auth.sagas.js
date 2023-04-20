import {all , put , takeLatest} from 'redux-saga/effects'
import * as types from '../actions/types'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
function* signUp(data){
    try{
        const res = yield axios.post(`http://3.72.149.127:3005/api/auth/signup` , data.payload.data).then(res => res.data)
        data.payload.navigate('/login')
    }catch(e){
        console.log(e);
        yield put(
            {
                type: types.FAIL_REGISTER_USER , 
                payload: e.response.data ? e.response.data : e
            }
        )
    }
}

function* signIn(data){
    try{
        const res = yield axios.post(`http://3.72.149.127:3005/api/auth/login` , data.payload.data).then(res => res.data)
        const decode = jwt_decode(res.token)
        localStorage.setItem("token" , res.token)
        axios.defaults.headers.common['Authorization'] = res.token
        data.payload.navigate(`/profile/${decode.id}`)
    }catch(e){
        yield put({type: types.FAIL_LOGIN_USER , payload: e.response.data ? e.response.data : e})
    }
}


export function* authSaga(){
    yield all([
        yield takeLatest(types.REGISTER_USER , signUp),
        yield takeLatest(types.LOGIN_USER , signIn)
    ])
}