import { applyMiddleware , createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas'
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState){
    const sagaMiddleware =  createSagaMiddleware()

    const getMiddleware = () => {
        return composeWithDevTools(applyMiddleware(sagaMiddleware))
    }
    
    const store = createStore(
        reducers, 
        initialState, 
        getMiddleware()
    )
    sagaMiddleware.run(rootSaga)
    return store
}