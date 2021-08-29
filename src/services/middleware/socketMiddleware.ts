import { MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookie";
import { TApplicationActions, TSocketActions, TSocketUserOrdersActions } from './../types/index';

export const socketMiddleware = (wsUrl: string, wsActions: TSocketActions | TSocketUserOrdersActions, provideToken = false) => {
    // не могу понять, как здесь типизировать store
    return (store: MiddlewareAPI) => {
        let socket: WebSocket;

        return (next: (action: TApplicationActions) => void) => (action: TApplicationActions) => {
            const { dispatch, getState } = store;
            const { type } = action;
            const { wsInit, onOpen, onError, onMessage, onClose } = wsActions;
            const user = getState().auth.user;

            if (type === wsInit) {
                let params = '';
                if (provideToken && user) {
                    const token = getCookie('accessToken');
                    params = `?token=${token}`;
                }
                console.log(`${wsUrl}${params}`);

                socket = new WebSocket(`${wsUrl}${params}`);
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({ type: onOpen, payload: event });
                };

                socket.onerror = event => {
                    dispatch({ type: onError, payload: event })
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;

                    dispatch({ type: onMessage, payload: restParsedData });
                };

                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event })
                };
            }

            next(action);
        };
    };
};