import * as types from '../actions/order';
import { orderReducer } from './order';

describe('burger constructor reducer', () => {
    it('should return the initial state', () => {
        expect(orderReducer(undefined, {})).toEqual({
            order: {},
            orderRequestSuccess: false,
            orderRequest: false
        });
    });

    it('should handle GET_ORDER_REQUEST', () => {
        expect(orderReducer({
            order: {},
            orderRequestSuccess: false,
            orderRequest: false
        }, {
            type: types.GET_ORDER_REQUEST
        })).toEqual({
            order: {},
            orderRequestSuccess: false,
            orderRequest: true
        });
    });

    it('should handle GET_ORDER_SUCCESS', () => {
        expect(orderReducer({
            order: {},
            orderRequestSuccess: false,
            orderRequest: false
        }, {
            type: types.GET_ORDER_SUCCESS,
            order: {
                "name": "Краторный метеоритный бургер",
                "order": {
                    "number": 6257
                },
                "success": true
            }
        })).toEqual({
            order: {
                "name": "Краторный метеоритный бургер",
                "order": {
                    "number": 6257
                },
                "success": true
            },
            orderRequestSuccess: true,
            orderRequest: false
        });
    });
});