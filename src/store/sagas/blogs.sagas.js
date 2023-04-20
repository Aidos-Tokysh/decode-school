import {all , put , takeLatest} from 'redux-saga/effects'
import * as types from '../actions/types'
import axios from 'axios'

function* createBlog(info){
    console.log(info)
    try{
        const data = yield axios.post('http://3.72.149.127:3005/api/blogs', info.payload.formData).then(res=>res.data)
        info.payload.navigate(`/profile/${data.user}`)
        // console.log(data)
        yield put({type:types.SUCCESS_CREATE_BLOG,payload: data})
    }catch(e){
        yield put({type:types.FAIL_CREATE_BLOG, payload:e.response.data ? e.response.data: e})
    }
}

function* getAllBlogs(){
    try{
        const data= yield axios.get('http://3.72.149.127:3005/api/blogs').then(res=>res.data)
        yield put({type:types.SUCCESS_GET_ALL_BLOGS,payload: data})
    }catch(e){
        yield put({type:types.FAIL_GET_ALL_BLOGS,payload:e.response.data ? e.response.data:e})
    }
}
function* getUserBlogs(info){

    try{
        const data= yield axios.get(`http://3.72.149.127:3005/api/blogs/byUser?userId=${info.payload}`).then(res=>res.data)
        yield put({type:types.SUCCESS_GET_USER_BLOGS,payload:data})
    }catch(e){
        yield put({type:types.FAIL_GET_USER_BLOGS,payload:e.response.data ? e.response.data:e})
    }
}

export function* blogsSaga(){
    yield all([
        yield takeLatest(types.CREATE_BLOG ,createBlog),
        yield takeLatest(types.GET_ALL_BLOGS,getAllBlogs),
        yield takeLatest(types.GET_USER_BLOGS,getUserBlogs),
    ])
}
