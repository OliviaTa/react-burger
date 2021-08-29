import { ILoginForm } from './../../pages/login';
import { IRegisterForm } from './../../pages/register';
import { AppThunk, AppDispatch } from './../types/index';
import { TUser } from './../../types/state.types';
import { getUserRequest, signInRequest, signOutRequest, signUpRequest, updateUserRequest } from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/cookie";

export const SET_USER: 'SET_USER' = 'SET_USER';
export const CLEAR_USER: 'CLEAR_USER' = 'CLEAR_USER';
export const SET_SIGNIN_SUCCESS: 'SET_SIGNIN_SUCCESS' = 'SET_SIGNIN_SUCCESS';

export interface ISetUserAction {
    readonly type: typeof SET_USER;
    readonly user: TUser;
};

export interface IClearUserAction {
    readonly type: typeof CLEAR_USER;
};

export interface ISetSigninSuccessAction {
    readonly type: typeof SET_SIGNIN_SUCCESS;
    readonly success: boolean;
};

export type TAuthActions = ISetUserAction
    | IClearUserAction
    | ISetSigninSuccessAction;

export const signUp: AppThunk = (form: IRegisterForm) => (dispatch: AppDispatch) => {
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

export const signIn: AppThunk = (form: ILoginForm) => (dispatch: AppDispatch) => {
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

export const signOut: AppThunk = () => (dispatch: AppDispatch) => {
    signOutRequest()
        .then(res => {
            dispatch({
                type: CLEAR_USER
            });
            deleteCookie('accessToken');
        })
}

export const getUser: AppThunk = () => (dispatch: AppDispatch) => {
    getUserRequest()
        .then(res => {
            dispatch({
                type: SET_USER,
                user: res.user
            });
        });
}

export const updateUser: AppThunk = (updatedUser) => (dispatch: AppDispatch) => {
    updateUserRequest(updatedUser)
        .then(res => {
            dispatch({
                type: SET_USER,
                user: res.user
            });
        });
}