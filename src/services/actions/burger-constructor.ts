import { AppDispatch, AppThunk } from './../types/index';
import { TBurgerConstructorItem } from './../../types/app.types';
import { getIngredientsRequest } from '../../utils/api';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';
export const ADD_CONSTRUCTOR_INGREDIENT: 'ADD_CONSTRUCTOR_INGREDIENT' = 'ADD_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT: 'REMOVE_CONSTRUCTOR_INGREDIENT' = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = 'CLEAR_CONSTRUCTOR';
export const CHANGE_CONSTRUCTOR_INGREDIENT_POSITION: 'CHANGE_CONSTRUCTOR_INGREDIENT_POSITION' = 'CHANGE_CONSTRUCTOR_INGREDIENT_POSITION';

export interface IGetIngredientsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
};

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly items: Array<TBurgerConstructorItem>;
};

export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILED;
};

export interface IAddConstructorIngredientAction {
    readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
    readonly item: TBurgerConstructorItem;
};

export interface IRemoveConstructorIngredientAction {
    readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENT;
    readonly index: number;
};

export interface IClearConstructorAction {
    readonly type: typeof CLEAR_CONSTRUCTOR;
};

export interface IChangeConstructorIngredientPositionAction {
    readonly type: typeof CHANGE_CONSTRUCTOR_INGREDIENT_POSITION;
    readonly item: TBurgerConstructorItem;
    readonly index: number;
};

export type TBurgerConstructorActions = IGetIngredientsRequestAction
    | IGetIngredientsSuccessAction
    | IGetIngredientsFailedAction
    | IAddConstructorIngredientAction
    | IRemoveConstructorIngredientAction
    | IClearConstructorAction
    | IChangeConstructorIngredientPositionAction;

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch({
        type: GET_INGREDIENTS_REQUEST
    });
    getIngredientsRequest()
        .then(res => {
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                items: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_INGREDIENTS_FAILED
            })
        });
}