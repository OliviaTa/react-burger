import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "../actions/order";

const initialState = {
    order: {},
    orderRequestSuccess: false,
    orderRequest: false
};

export const orderReducer = (state = initialState, action) => {
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