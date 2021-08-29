import { TUser } from './../../types/state.types';
import { TAuthActions } from './../actions/auth';
import { CLEAR_USER, SET_SIGNIN_SUCCESS, SET_USER } from "../actions/auth";

type TAuthState = {
    user: TUser | null;
    signInSuccess: boolean;
}

const initialState: TAuthState = {
    user: null,
    signInSuccess: true
};

export const authReducer = (state = initialState, action: TAuthActions): TAuthState => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.user
            };
        }
        case CLEAR_USER: {
            return {
                ...state,
                user: null
            };
        }
        case SET_SIGNIN_SUCCESS: {
            return {
                ...state,
                signInSuccess: action.success
            };
        }
        default:
            return state;
    }
};