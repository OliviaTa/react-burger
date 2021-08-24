import * as types from '../actions/userOrders';
import { userOrdersReducer } from './userOrders';

describe('burger constructor reducer', () => {
    it('should return the initial state', () => {
        expect(userOrdersReducer(undefined, {})).toEqual({
            wsConnected: false,
            userOrdersData: {}
        });
    });

    it('should handle WS_USER_ORDERS_CONNECTION_SUCCESS', () => {
        expect(userOrdersReducer({
            wsConnected: false,
            userOrdersData: {}
        }, {
            type: types.WS_USER_ORDERS_CONNECTION_SUCCESS
        })).toEqual({
            wsConnected: true,
            userOrdersData: {}
        });
    });

    it('should handle WS_USER_ORDERS_CONNECTION_ERROR', () => {
        expect(userOrdersReducer({
            wsConnected: false,
            userOrdersData: {}
        }, {
            type: types.WS_USER_ORDERS_CONNECTION_ERROR
        })).toEqual({
            wsConnected: false,
            userOrdersData: {}
        });
    });

    it('should handle WS_USER_ORDERS_CONNECTION_CLOSED', () => {
        expect(userOrdersReducer({
            wsConnected: false,
            userOrdersData: {}
        }, {
            type: types.WS_USER_ORDERS_CONNECTION_CLOSED
        })).toEqual({
            wsConnected: false,
            userOrdersData: {}
        });
    });

    it('should handle WS_USER_ORDERS_GET_MESSAGE', () => {
        expect(userOrdersReducer({
            wsConnected: true,
            userOrdersData: {}
        }, {
            type: types.WS_USER_ORDERS_GET_MESSAGE,
            payload: {
                "orders": [
                    {
                        "ingredients": [
                            "60d3463f7034a000269f45e9",
                            "60d3463f7034a000269f45e7"
                        ],
                        "_id": "",
                        "status": "done",
                        "number": 1,
                        "createdAt": "2021-06-23T20:11:01.403Z",
                        "updatedAt": "2021-06-23T20:11:01.406Z"
                    },
                    {
                        "ingredients": [
                            "60d3463f7034a000269f45e9"
                        ],
                        "_id": "",
                        "status": "done",
                        "number": 3,
                        "createdAt": "2021-06-23T20:13:23.654Z",
                        "updatedAt": "2021-06-23T20:13:23.657Z"
                    }
                ],
                "total": 2,
                "totalToday": 2
            }
        })).toEqual({
            wsConnected: true,
            userOrdersData: {
                "orders": [
                    {
                        "ingredients": [
                            "60d3463f7034a000269f45e9",
                            "60d3463f7034a000269f45e7"
                        ],
                        "_id": "",
                        "status": "done",
                        "number": 1,
                        "createdAt": "2021-06-23T20:11:01.403Z",
                        "updatedAt": "2021-06-23T20:11:01.406Z"
                    },
                    {
                        "ingredients": [
                            "60d3463f7034a000269f45e9"
                        ],
                        "_id": "",
                        "status": "done",
                        "number": 3,
                        "createdAt": "2021-06-23T20:13:23.654Z",
                        "updatedAt": "2021-06-23T20:13:23.657Z"
                    }
                ],
                "total": 2,
                "totalToday": 2
            }
        });
    });
});