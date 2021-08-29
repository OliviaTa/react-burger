import { TOrderItem } from './../../types/app.types';
import { getOrderData } from "../../utils/api";
import { AppDispatch, AppThunk } from '../types';
import { TOrderInfo } from './../../types/state.types';
import { CLEAR_CONSTRUCTOR } from "./burger-constructor";

export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';

export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
};

export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly order: TOrderInfo;
};

export type TOrderActions = IGetOrderRequestAction | IGetOrderSuccessAction;

export const getOrder: AppThunk = (ingredientsId: string[]) => (dispatch: AppDispatch) => {
    dispatch({ type: GET_ORDER_REQUEST });
    getOrderData(ingredientsId)
        .then(res => {
            const order: TOrderInfo = res.order;
            if (order?.ingredients) {
                order.ingredients = order.ingredients.filter(item => item);
            }

            dispatch({
                type: GET_ORDER_SUCCESS,
                order
            });
            dispatch({ type: CLEAR_CONSTRUCTOR });
        })
        .catch(err => console.log(err));
}