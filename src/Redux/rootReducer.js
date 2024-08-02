import { combineReducers } from "redux";
import { prestationReducer } from "./prestationReducer";



export const rootReducer = combineReducers({
    prestationReducer:prestationReducer
})