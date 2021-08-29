import { TBurgerConstructorActions } from './../actions/burger-constructor';
import { v4 as uuidv4 } from 'uuid';
import { TBurgerConstructorItem } from '../../types/app.types';
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
    CLEAR_CONSTRUCTOR,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    REMOVE_CONSTRUCTOR_INGREDIENT
} from "../actions/burger-constructor";

type TBurgerConstructorState = {
    ingredients: Array<TBurgerConstructorItem>;
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
    constructorIngredients: {
        bun: TBurgerConstructorItem | null,
        ingredients: Array<TBurgerConstructorItem>
    }
};

const initialState: TBurgerConstructorState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    constructorIngredients: {
        bun: null,
        ingredients: []
    }
};

export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsFailed: false,
                ingredients: action.items,
                ingredientsRequest: false
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsFailed: true,
                ingredientsRequest: false
            };
        }
        case ADD_CONSTRUCTOR_INGREDIENT: {
            if (action.item.type === 'bun') {
                return {
                    ...state,
                    constructorIngredients: {
                        ...state.constructorIngredients,
                        bun: action.item
                    }
                };
            }

            const changedIngredients = [...state.constructorIngredients.ingredients];
            changedIngredients.push({ ...action.item, uid: uuidv4() });
            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    ingredients: changedIngredients
                }
            };
        }
        case REMOVE_CONSTRUCTOR_INGREDIENT: {
            const changedIngredients = [...state.constructorIngredients.ingredients];
            changedIngredients.splice(action.index, 1);
            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    ingredients: changedIngredients
                }
            };
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...state,
                constructorIngredients: {
                    ...initialState.constructorIngredients
                }
            }
        }
        case CHANGE_CONSTRUCTOR_INGREDIENT_POSITION: {
            const ingredient = state.constructorIngredients.ingredients.filter(element => element.uid === action.item.uid)[0];
            const index = state.constructorIngredients.ingredients.indexOf(ingredient);

            const changedIngredients = [...state.constructorIngredients.ingredients];
            changedIngredients.splice(index, 1);
            changedIngredients.splice(action.index, 0, ingredient);

            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    ingredients: changedIngredients
                }
            };
        }
        default:
            return state;
    }
};