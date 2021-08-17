import { WS_USER_ORDERS_CONNECTION_CLOSED, WS_USER_ORDERS_CONNECTION_ERROR, WS_USER_ORDERS_CONNECTION_SUCCESS, WS_USER_ORDERS_GET_MESSAGE } from "../actions/userOrders";

const initialState = {
    wsConnected: false,
    userOrdersData: {}
};

export const userOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_USER_ORDERS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };
        case WS_USER_ORDERS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false
            };
        case WS_USER_ORDERS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            }
        case WS_USER_ORDERS_GET_MESSAGE:
            return {
                ...state,
                userOrdersData: action.payload
            };
        default:
            return state;
    }
};