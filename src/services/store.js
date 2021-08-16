import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "./actions/allOrders";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { rootReducer } from "./reducers/app";

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';

const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE,
    onClose: WS_CONNECTION_CLOSED
};

const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)));

export const initStore = (initialState = {}) =>
    createStore(
        rootReducer,
        initialState,
        enhancer
    );