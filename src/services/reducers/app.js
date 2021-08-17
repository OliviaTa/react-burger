import { combineReducers } from "redux";
import { allOrdersReducer } from "./allOrders";
import { authReducer } from "./auth";
import { burgerConstructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";
import { userOrdersReducer } from './userOrders';

export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer,
    auth: authReducer,
    allOrders: allOrdersReducer,
    userOrders: userOrdersReducer
});