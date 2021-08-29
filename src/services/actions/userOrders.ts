import { TOrdersData } from './../../types/state.types';
export const WS_USER_ORDERS_CONNECTION_START: 'WS_USER_ORDERS_CONNECTION_START' = 'WS_USER_ORDERS_CONNECTION_START';
export const WS_USER_ORDERS_CONNECTION_SUCCESS: 'WS_USER_ORDERS_CONNECTION_SUCCESS' = 'WS_USER_ORDERS_CONNECTION_SUCCESS';
export const WS_USER_ORDERS_CONNECTION_ERROR: 'WS_USER_ORDERS_CONNECTION_ERROR' = 'WS_USER_ORDERS_CONNECTION_ERROR';
export const WS_USER_ORDERS_CONNECTION_CLOSED: 'WS_USER_ORDERS_CONNECTION_CLOSED' = 'WS_USER_ORDERS_CONNECTION_CLOSED';
export const WS_USER_ORDERS_GET_MESSAGE: 'WS_USER_ORDERS_GET_MESSAGE' = 'WS_USER_ORDERS_GET_MESSAGE';

export interface IWsUserOrdersConnectionStartAction {
    readonly type: typeof WS_USER_ORDERS_CONNECTION_START;
};

export interface IWsUserOrdersConnectionSuccessAction {
    readonly type: typeof WS_USER_ORDERS_CONNECTION_SUCCESS;
};

export interface IWsUserOrdersConnectionErrorAction {
    readonly type: typeof WS_USER_ORDERS_CONNECTION_ERROR;
};

export interface IWsUserOrdersConnectionClosedAction {
    readonly type: typeof WS_USER_ORDERS_CONNECTION_CLOSED;
};

export interface IWsUserOrdersGetMessageAction {
    readonly type: typeof WS_USER_ORDERS_GET_MESSAGE;
    readonly payload: TOrdersData;
};

export type TUserOrdersActions = IWsUserOrdersConnectionStartAction
    | IWsUserOrdersConnectionSuccessAction
    | IWsUserOrdersConnectionErrorAction
    | IWsUserOrdersConnectionClosedAction
    | IWsUserOrdersGetMessageAction;