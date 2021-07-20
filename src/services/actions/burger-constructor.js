import { getIngredientsRequest } from '../../utils/api';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';
export const CHANGE_CONSTRUCTOR_INGREDIENT_POSITION = 'CHANGE_CONSTRUCTOR_INGREDIENT_POSITION';

export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT = 'REMOVE_CURRENT_INGREDIENT';

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