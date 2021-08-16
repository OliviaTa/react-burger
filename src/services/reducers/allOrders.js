import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../actions/allOrders";

const initialState = {
    wsConnected: false,
    ordersData: {}
};

export const allOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            }
        case WS_GET_MESSAGE:
            return {
                ...state,
                ordersData: action.payload
            };
        default:
            return state;
    }
};