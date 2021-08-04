import { getUserRequest, signInRequest, signOutRequest, signUpRequest, updateUserRequest } from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/cookie";

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const SET_SIGNIN_SUCCESS = 'SET_SIGNIN_SUCCESS';

export function signUp(form) {
    return function (dispatch) {
        signUpRequest(form)
            .then(res => {
                if (res.accessToken && res.accessToken.indexOf('Bearer') === 0) {
                    localStorage.setItem('refreshToken', res.refreshToken);
                    setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
                }
                dispatch({
                    type: SET_USER,
                    user: res.user
                });
            })
    }
}

export function signIn(form) {
    return function (dispatch) {
        signInRequest(form)
            .then(res => {
                if (res.accessToken && res.accessToken.indexOf('Bearer') === 0) {
                    localStorage.setItem('refreshToken', res.refreshToken);
                    setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
                }
                dispatch({
                    type: SET_USER,
                    user: res.user
                });
                dispatch({
                    type: SET_SIGNIN_SUCCESS,
                    success: true
                });
            })
            .catch(err => {
                if (err.message === 'email or password are incorrect') {
                    dispatch({
                        type: SET_SIGNIN_SUCCESS,
                        success: false
                    });
                }
            });
    }
}

export function signOut() {
    return function (dispatch) {
        signOutRequest()
            .then(res => {
                dispatch({
                    type: CLEAR_USER
                });
                deleteCookie('accessToken');
            })
    }
}

export function getUser() {
    return function (dispatch) {
        getUserRequest()
            .then(res => {
                dispatch({
                    type: SET_USER,
                    user: res.user
                });
            });
    }
}

export function updateUser(updatedUser) {
    return function (dispatch) {
        updateUserRequest(updatedUser)
            .then(res => {
                dispatch({
                    type: SET_USER,
                    user: res.user
                });
            });
    }
}