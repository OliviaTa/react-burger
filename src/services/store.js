import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "./actions/allOrders";
import { WS_USER_ORDERS_CONNECTION_CLOSED, WS_USER_ORDERS_CONNECTION_DISCONNECT, WS_USER_ORDERS_CONNECTION_ERROR, WS_USER_ORDERS_CONNECTION_START, WS_USER_ORDERS_CONNECTION_SUCCESS, WS_USER_ORDERS_GET_MESSAGE } from "./actions/userOrders";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { rootReducer } from "./reducers/app";

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const wsUserOrdersUrl = 'wss://norma.nomoreparties.space/orders';

const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE,
    onClose: WS_CONNECTION_CLOSED
};
const wsUserOrdersActions = {
    wsInit: WS_USER_ORDERS_CONNECTION_START,
    onOpen: WS_USER_ORDERS_CONNECTION_SUCCESS,
    onError: WS_USER_ORDERS_CONNECTION_ERROR,
    onMessage: WS_USER_ORDERS_GET_MESSAGE,
    onClose: WS_USER_ORDERS_CONNECTION_CLOSED,
    wsClose: WS_USER_ORDERS_CONNECTION_DISCONNECT
};

const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions), socketMiddleware(wsUserOrdersUrl, wsUserOrdersActions, true)));

export const initStore = (initialState = {}) =>
    createStore(
        rootReducer,
        initialState,
        enhancer
    );