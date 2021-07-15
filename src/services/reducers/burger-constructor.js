import { GET_INGREDIENTS, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, REMOVE_CONSTRUCTOR_INGREDIENT, REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT } from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    constructorIngredients: {
        bun: null,
        ingredients: []
    },
    currentIngredient: {},
    order: {},
    orderRequestSuccess: false
};

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.items
            };
        }
        case REMOVE_CONSTRUCTOR_INGREDIENT: {
            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    ingredients: [
                        ...state.constructorIngredients.ingredients.splice(action.index, 1)
                    ]
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
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequestSuccess: false
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                order: action.order,
                orderRequestSuccess: true
            }
        }
        default:
            return state;
    }
};