const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';
const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';

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
}