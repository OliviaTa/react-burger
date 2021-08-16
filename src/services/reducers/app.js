import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";
import { allOrdersReducer } from "./allOrders";

export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer,
    auth: authReducer,
    allOrders: allOrdersReducer
});