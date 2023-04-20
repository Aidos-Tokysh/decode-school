import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import categoriesReducers from "./categories.reducers";
import blogsReducers from "./blogs.reducers";
export default combineReducers({
    authReducers,
    categoriesReducers,
    blogsReducers
})