import { TProfileForm } from './../pages/profile';
import { ILoginForm } from './../pages/login';
import { IRegisterForm } from './../pages/register';
import { IResetPasswordForm } from '../pages/reset-password';
import { IForgotPasswordForm } from './../pages/forgot-password';
import { getCookie, setCookie } from "./cookie";

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';
const SEND_CODE_RESET_URL = 'https://norma.nomoreparties.space/api/password-reset';
const PASSWORD_RESET_URL = 'https://norma.nomoreparties.space/api/password-reset/reset';
const REGISTER_URL = 'https://norma.nomoreparties.space/api/auth/register';
const LOGIN_URL = 'https://norma.nomoreparties.space/api/auth/login';
const LOGOUT_URL = 'https://norma.nomoreparties.space/api/auth/logout';
const REFRESH_TOKEN_URL = 'https://norma.nomoreparties.space/api/auth/token';
const GET_USER_URL = 'https://norma.nomoreparties.space/api/auth/user';

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const fetchRequest = async (url: string, options?: RequestInit) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        return Promise.reject(err);
    }
};

const refreshToken = () => {
    return fetch(REFRESH_TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    })
        .then(checkResponse);
};

const fetchWithRefresh = async (url: string, options: RequestInit = {}) => {
    if (!options.headers) {
        options.headers = {};
    }

    try {
        const res = await fetch(url, options);

        return await checkResponse(res);
    } catch (err) {
        if (err.message === 'jwt expired') {
            const refreshData = await refreshToken();
            localStorage.setItem('refreshToken', refreshData.refreshToken);
            setCookie('accessToken', refreshData.accessToken.split('Bearer ')[1], { expires: 20 * 60 });

            const header = new Headers(options.headers);
            header.append('athorization', refreshData.accessToken);
            options.headers = header;

            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export const getIngredientsRequest = async () => {
    return await fetchRequest(INGREDIENTS_URL);
};

export const getOrderData = async (ingredientsIdList: string[]) => {
    return await fetchWithRefresh(ORDER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({
            ingredients: ingredientsIdList
        })
    });
};

export const recoveryPassword = async (form: IForgotPasswordForm) => {
    return await fetchRequest(SEND_CODE_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
};

export const resetPassword = async (form: IResetPasswordForm) => {
    return await fetchRequest(PASSWORD_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
};

export const signUpRequest = async (form: IRegisterForm) => {
    return await fetchRequest(REGISTER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
};

export const signInRequest = async (form: ILoginForm) => {
    return await fetchRequest(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
};

export const signOutRequest = async () => {
    return await fetchRequest(LOGOUT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    });
};

export const getUserRequest = async () => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) {
        return { user: null };
    }

    return await fetchWithRefresh(GET_USER_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    });
};

export const updateUserRequest = async (updatedUser: TProfileForm<string>) => {
    return await fetchWithRefresh(GET_USER_URL, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify(updatedUser)
    });
}