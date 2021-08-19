import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsUrl, wsActions, provideToken = false) => {
    return store => {
        let socket = null;

        return next => action => {
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