import * as types from '../actions/allOrders';
import { allOrdersReducer } from './allOrders';

describe('allOrders reducer', () => {
    it('should return the initial state', () => {
        expect(allOrdersReducer(undefined, {})).toEqual({
            wsConnected: false,
            ordersData: {}
        });
    });

    it('should handle WS_CONNECTION_SUCCESS', () => {
        expect(allOrdersReducer({
            wsConnected: false,
            ordersData: {}
        }, {
            type: types.WS_CONNECTION_SUCCESS
        })).toEqual({
            wsConnected: true,
            ordersData: {}
        });
    });

    it('should handle WS_CONNECTION_ERROR', () => {
        expect(allOrdersReducer({
            wsConnected: false,
            ordersData: {}
        }, {
            type: types.WS_CONNECTION_ERROR
        })).toEqual({
            wsConnected: false,
            ordersData: {}
        });
    });

    it('should handle WS_CONNECTION_CLOSED', () => {
        expect(allOrdersReducer({
            wsConnected: false,
            ordersData: {}
        }, {
            type: types.WS_CONNECTION_CLOSED
        })).toEqual({
            wsConnected: false,
            ordersData: {}
        });
    });

    it('should handle WS_GET_MESSAGE', () => {
        expect(allOrdersReducer({
            wsConnected: false,
            ordersData: {}
        }, {
            type: types.WS_GET_MESSAGE,
            payload: {
                "orders": [
                    {
                        "ingredients": [
                            "60d3463f7034a000269f45e7",
                            "60d3463f7034a000269f45e9",
                            "60d3463f7034a000269f45e8",
                            "60d3463f7034a000269f45ea"
                        ],
                        "_id": "",
                        "status": "done",
                        "number": 0,
                        "createdAt": "2021-06-23T14:43:22.587Z",
                        "updatedAt": "2021-06-23T14:43:22.603Z"
                    }
                ],
                "total": 1,
                "totalToday": 1
            }
        })).toEqual({
            wsConnected: false,
            ordersData: {
                "orders": [
                    {
                        "ingredients": [
                            "60d3463f7034a000269f45e7",
                            "60d3463f7034a000269f45e9",
                            "60d3463f7034a000269f45e8",
                            "60d3463f7034a000269f45ea"
                        ],
                        "_id": "",
                        "status": "done",
                        "number": 0,
                        "createdAt": "2021-06-23T14:43:22.587Z",
                        "updatedAt": "2021-06-23T14:43:22.603Z"
                    }
                ],
                "total": 1,
                "totalToday": 1
            }
        });

        expect(allOrdersReducer({
            wsConnected: false,
            ordersData: {
                "orders": [
                    {
                        "ingredients": [
                            "60d3463f7034a000269f45e7",
                            "60d3463f7034a000269f45e9",
                            "60d3463f7034a000269f45e8",
                            "60d3463f7034a000269f45ea"
                        ],
                        "_id": "",
                        "status": "done",
                        "number": 0,
                        "createdAt": "2021-06-23T14:43:22.587Z",
                        "updatedAt": "2021-06-23T14:43:22.603Z"
                    }
                ],
                "total": 1,
                "totalToday": 1
            }
        }, {
            type: types.WS_GET_MESSAGE,
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
            wsConnected: false,
            ordersData: {
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