const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';
const SEND_CODE_RESET_URL = 'https://norma.nomoreparties.space/api/password-reset';
const PASSWORD_RESET_URL = 'https://norma.nomoreparties.space/api/password-reset/reset';
const REGISTER_URL = 'https://norma.nomoreparties.space/api/auth/register';
const LOGIN_URL = 'https://norma.nomoreparties.space/api/auth/login';
const LOGOUT_URL = 'https://norma.nomoreparties.space/api/auth/logout';

export const fetchRequest = async (url, options) => {
    const res = await fetch(url, options);

    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

export const getIngredientsRequest = async () => {
    return await fetchRequest(INGREDIENTS_URL);
};

export const getOrderData = async (ingredientsIdList) => {
    return await fetchRequest(ORDER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ingredients: ingredientsIdList
        })
    });
};

export const recoveryPassword = async (form) => {
    return await fetchRequest(SEND_CODE_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
};

export const resetPassword = async (form) => {
    return await fetchRequest(PASSWORD_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
};

export const signUpRequest = async (form) => {
    return await fetchRequest(REGISTER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });
};

export const signInRequest = async (form) => {
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