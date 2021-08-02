const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';
const SEND_CODE_RESET_URL = 'https://norma.nomoreparties.space/api/password-reset';
const PASSWORD_RESET_URL = 'https://norma.nomoreparties.space/api/password-reset/reset';

export const getIngredientsRequest = async () => {
    const res = await fetch(INGREDIENTS_URL);

    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject(`Ошибка ${res.status}`);
    }
};

export const getOrderData = async (ingredientsIdList) => {
    const res = await fetch(ORDER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ingredients: ingredientsIdList
        })
    });

    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject(`Ошибка ${res.status}`);
    }
};

export const recoveryPassword = async (form) => {
    const res = await fetch(SEND_CODE_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject(`Ошибка ${res.status}`);
    }
};

export const resetPassword = async (form) => {
    const res = await fetch(PASSWORD_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject(`Ошибка ${res.status}`);
    }
};