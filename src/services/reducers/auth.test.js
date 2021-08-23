import * as types from '../actions/auth';
import { authReducer } from './auth';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            user: null,
            signInSuccess: true
        });
    });

    it('should handle SET_USER', () => {
        expect(authReducer({
            user: null,
            signInSuccess: true
        }, {
            type: types.SET_USER,
            user: {
                email: "test@gmail.com",
                name: "Test"
            }
        })).toEqual({
            user: {
                email: "test@gmail.com",
                name: "Test"
            },
            signInSuccess: true
        });
    });

    it('should handle CLEAR_USER', () => {
        expect(authReducer({
            user: null,
            signInSuccess: true
        }, {
            type: types.CLEAR_USER
        })).toEqual({
            user: null,
            signInSuccess: true
        });

        expect(authReducer({
            user: {
                email: "test@gmail.com",
                name: "Test"
            },
            signInSuccess: true
        }, {
            type: types.CLEAR_USER
        })).toEqual({
            user: null,
            signInSuccess: true
        });
    });

    it('should handle SET_SIGNIN_SUCCESS', () => {
        expect(authReducer({
            user: null,
            signInSuccess: true
        }, {
            type: types.SET_SIGNIN_SUCCESS,
            success: false
        })).toEqual({
            user: null,
            signInSuccess: false
        });
    });
});