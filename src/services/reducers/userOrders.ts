import { TUserOrdersActions } from './../actions/userOrders';
import { TOrdersData } from './../../types/state.types';
import { WS_USER_ORDERS_CONNECTION_CLOSED, WS_USER_ORDERS_CONNECTION_ERROR, WS_USER_ORDERS_CONNECTION_SUCCESS, WS_USER_ORDERS_GET_MESSAGE } from "../actions/userOrders";

type TUserOrdersState = {
    wsConnected: boolean;
    userOrdersData: TOrdersData | null;
};

const initialState: TUserOrdersState = {
    wsConnected: false,
    userOrdersData: null
};

export const userOrdersReducer = (state = initialState, action: TUserOrdersActions): TUserOrdersState => {
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