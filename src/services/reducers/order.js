import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "../actions/order";

const initialState = {
    order: {},
    orderRequestSuccess: false
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequestSuccess: false
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                order: action.order,
                orderRequestSuccess: true
            }
        }
        default:
            return state;
    }
};