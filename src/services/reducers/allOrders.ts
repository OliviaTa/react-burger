import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../actions/allOrders";
import { TOrdersData } from './../../types/state.types';
import { TAllOrdersActions } from './../actions/allOrders';

type TAllOrdersState = {
    wsConnected: boolean;
    ordersData: TOrdersData | null;
};

const initialState: TAllOrdersState = {
    wsConnected: false,
    ordersData: null
};

export const allOrdersReducer = (state = initialState, action: TAllOrdersActions): TAllOrdersState => {
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