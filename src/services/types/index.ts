import { TUserOrdersActions, WS_USER_ORDERS_CONNECTION_START, WS_USER_ORDERS_CONNECTION_SUCCESS, WS_USER_ORDERS_CONNECTION_ERROR, WS_USER_ORDERS_GET_MESSAGE, WS_USER_ORDERS_CONNECTION_CLOSED } from './../actions/userOrders';
import { TOrderActions } from '../actions/order';
import { store } from './../../index';
import { TAllOrdersActions, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_GET_MESSAGE, WS_CONNECTION_CLOSED } from './../actions/allOrders';
import { TAuthActions } from './../actions/auth';
import { TBurgerConstructorActions } from './../actions/burger-constructor';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TAllOrdersActions
    | TAuthActions
    | TBurgerConstructorActions
    | TOrderActions
    | TUserOrdersActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;

export type TSocketActions = {
    wsInit: typeof WS_CONNECTION_START,
    onOpen: typeof WS_CONNECTION_SUCCESS,
    onError: typeof WS_CONNECTION_ERROR,
    onMessage: typeof WS_GET_MESSAGE,
    onClose: typeof WS_CONNECTION_CLOSED
};
export type TSocketUserOrdersActions = {
    wsInit: typeof WS_USER_ORDERS_CONNECTION_START,
    onOpen: typeof WS_USER_ORDERS_CONNECTION_SUCCESS,
    onError: typeof WS_USER_ORDERS_CONNECTION_ERROR,
    onMessage: typeof WS_USER_ORDERS_GET_MESSAGE,
    onClose: typeof WS_USER_ORDERS_CONNECTION_CLOSED
};