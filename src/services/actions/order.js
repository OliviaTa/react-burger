import { getOrderData } from "../../utils/api";
import { CLEAR_CONSTRUCTOR } from "./burger-constructor";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';

export function getOrder(ingredientsId) {
    return function (dispatch) {
        dispatch({ type: GET_ORDER_REQUEST });
        getOrderData(ingredientsId)
            .then(res => {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    order: res.order
                });
                dispatch({ type: CLEAR_CONSTRUCTOR });
            })
            .catch(err => console.log(err));
    }
}