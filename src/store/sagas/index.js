import {all} from 'redux-saga/effects'
import { authSaga } from './auth.sagas'
import { categoriesSaga } from './categories.sagas'
import { blogsSaga } from './blogs.sagas'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

export default function* rootSaga(){
    yield all([
        authSaga(),
        categoriesSaga(),
        blogsSaga()
    ])
}