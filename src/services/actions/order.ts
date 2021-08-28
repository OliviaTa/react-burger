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

export const getOrder: AppThunk = (ingredientsId) => (dispatch: AppDispatch) => {
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