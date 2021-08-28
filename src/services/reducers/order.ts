import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "../actions/order";
import { TOrderInfo } from './../../types/state.types';
import { TOrderActions } from './../actions/order';

type TOrderState = {
    order: TOrderInfo | null;
    orderRequestSuccess: boolean;
    orderRequest: boolean
};

const initialState: TOrderState = {
    order: null,
    orderRequestSuccess: false,
    orderRequest: false
};

export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequestSuccess: false,
                orderRequest: true
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                order: action.order,
                orderRequestSuccess: true,
                orderRequest: false
            }
        }
        default:
            return state;
    }
};