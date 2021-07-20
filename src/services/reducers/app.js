import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer
});