import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";

export const rootReducer = combineReducers({
    constructor: burgerConstructorReducer
});