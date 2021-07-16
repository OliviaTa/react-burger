import { getIngredientsRequest, getOrderData } from '../../utils/api';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const CHANGE_CONSTRUCTOR_INGREDIENT_POSITION = 'CHANGE_CONSTRUCTOR_INGREDIENT_POSITION';

export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT = 'REMOVE_CURRENT_INGREDIENT';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';

export function getIngredients() {
    return function (dispatch) {
        getIngredientsRequest()
            .then(res => {
                dispatch({
                    type: GET_INGREDIENTS,
                    items: res.data
                });
            })
            .catch(err => console.log(err));
    }
}

export function getOrder(ingredientsId) {
    return function (dispatch) {
        dispatch({ type: GET_ORDER_REQUEST });
        getOrderData(ingredientsId)
            .then(res => {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    order: res.order
                });
            })
            .catch(err => console.log(err));
    }
}