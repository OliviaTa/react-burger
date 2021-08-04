import { CLEAR_USER, SET_SIGNIN_SUCCESS, SET_USER } from "../actions/auth";

const initialState = {
    user: null,
    signInSuccess: true
};

export const authReducer = (state = initialState, action) => {
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