import {createStore, combineReducers, applyMiddleware} from "redux";
import noteReducer from "./reducers/noteReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({ noteReducer });
const store = createStore(reducers, applyMiddleware(thunk));
export default store;