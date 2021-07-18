import { v4 as uuidv4 } from 'uuid';
import {
    ADD_CONSTRUCTOR_INGREDIENT,
    CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
    CLEAR_CONSTRUCTOR,
    GET_INGREDIENTS,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    REMOVE_CURRENT_INGREDIENT,
    SET_CURRENT_INGREDIENT
} from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    constructorIngredients: {
        bun: null,
        ingredients: []
    },
    currentIngredient: {}
};

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.items
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
        case SET_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.item
            }
        }
        case REMOVE_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: {}
            }
        }
        default:
            return state;
    }
};