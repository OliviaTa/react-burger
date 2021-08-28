import * as types from '../actions/burger-constructor';
import { burgerConstructorReducer } from './burger-constructor';

describe('burger constructor reducer', () => {
    it('should return the initial state', () => {
        expect(burgerConstructorReducer(undefined, {})).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        });
    });

    it('should handle GET_INGREDIENTS_REQUEST', () => {
        expect(burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        }, {
            type: types.GET_INGREDIENTS_REQUEST
        })).toEqual({
            ingredients: [],
            ingredientsRequest: true,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        });
    });

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
        expect(burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        }, {
            type: types.GET_INGREDIENTS_SUCCESS,
            items: [
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }
            ]
        })).toEqual({
            ingredients: [
                {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }
            ],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        });
    });

    it('should handle GET_INGREDIENTS_FAILED', () => {
        expect(burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        }, {
            type: types.GET_INGREDIENTS_FAILED
        })).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: true,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        });
    });

    it('should handle ADD_CONSTRUCTOR_INGREDIENT', () => {
        let state;

        expect(burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        }, {
            type: types.ADD_CONSTRUCTOR_INGREDIENT,
            item: {
                "_id": "60666c42cc7b410027a1a9b1",
                "name": "Краторная булка N-200i",
                "type": "bun",
                "proteins": 80,
                "fat": 24,
                "carbohydrates": 53,
                "calories": 420,
                "price": 1255,
                "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                "__v": 0
            }
        })).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                ingredients: []
            }
        });

        expect(burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                ingredients: []
            }
        }, {
            type: types.ADD_CONSTRUCTOR_INGREDIENT,
            item: {
                "_id": "60666c42cc7b410027a1a9b2",
                "name": "Флюоресцентная булка R2-D3",
                "type": "bun",
                "proteins": 44,
                "fat": 26,
                "carbohydrates": 85,
                "calories": 643,
                "price": 988,
                "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                "__v": 0
            }
        })).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: {
                    "_id": "60666c42cc7b410027a1a9b2",
                    "name": "Флюоресцентная булка R2-D3",
                    "type": "bun",
                    "proteins": 44,
                    "fat": 26,
                    "carbohydrates": 85,
                    "calories": 643,
                    "price": 988,
                    "image": "https://code.s3.yandex.net/react/code/bun-01.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
                    "__v": 0
                },
                ingredients: []
            }
        });

        state = {
            ...burgerConstructorReducer({
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false,
                constructorIngredients: {
                    bun: null,
                    ingredients: []
                }
            }, {
                type: types.ADD_CONSTRUCTOR_INGREDIENT,
                item: {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }
            })
        };
        state.constructorIngredients.ingredients.forEach(ingredient => {
            delete ingredient.uid;
        });
        expect(state).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: [
                    {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 0
                    }
                ]
            }
        });

        state = {
            ...burgerConstructorReducer({
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false,
                constructorIngredients: {
                    bun: null,
                    ingredients: [
                        {
                            "_id": "60666c42cc7b410027a1a9b6",
                            "name": "Биокотлета из марсианской Магнолии",
                            "type": "main",
                            "proteins": 420,
                            "fat": 142,
                            "carbohydrates": 242,
                            "calories": 4242,
                            "price": 424,
                            "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                            "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                            "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                            "__v": 0
                        }
                    ]
                }
            }, {
                type: types.ADD_CONSTRUCTOR_INGREDIENT,
                item: {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }
            })
        };
        state.constructorIngredients.ingredients.forEach(ingredient => {
            delete ingredient.uid;
        });
        expect(state).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: [
                    {
                        "_id": "60666c42cc7b410027a1a9b6",
                        "name": "Биокотлета из марсианской Магнолии",
                        "type": "main",
                        "proteins": 420,
                        "fat": 142,
                        "carbohydrates": 242,
                        "calories": 4242,
                        "price": 424,
                        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                        "__v": 0
                    }, {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 0
                    }
                ]
            }
        });
    });

    it('should handle REMOVE_CONSTRUCTOR_INGREDIENT', () => {
        expect(burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: [
                    {
                        "_id": "60666c42cc7b410027a1a9b6",
                        "name": "Биокотлета из марсианской Магнолии",
                        "type": "main",
                        "proteins": 420,
                        "fat": 142,
                        "carbohydrates": 242,
                        "calories": 4242,
                        "price": 424,
                        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                        "__v": 0
                    }, {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 0
                    }
                ]
            }
        }, {
            type: types.REMOVE_CONSTRUCTOR_INGREDIENT,
            index: 1
        })).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: [
                    {
                        "_id": "60666c42cc7b410027a1a9b6",
                        "name": "Биокотлета из марсианской Магнолии",
                        "type": "main",
                        "proteins": 420,
                        "fat": 142,
                        "carbohydrates": 242,
                        "calories": 4242,
                        "price": 424,
                        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                        "__v": 0
                    }
                ]
            }
        });
    });

    it('should handle CLEAR_CONSTRUCTOR', () => {
        expect(burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: {
                    "_id": "60666c42cc7b410027a1a9b1",
                    "name": "Краторная булка N-200i",
                    "type": "bun",
                    "proteins": 80,
                    "fat": 24,
                    "carbohydrates": 53,
                    "calories": 420,
                    "price": 1255,
                    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
                    "__v": 0
                },
                ingredients: [
                    {
                        "_id": "60666c42cc7b410027a1a9b6",
                        "name": "Биокотлета из марсианской Магнолии",
                        "type": "main",
                        "proteins": 420,
                        "fat": 142,
                        "carbohydrates": 242,
                        "calories": 4242,
                        "price": 424,
                        "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                        "__v": 0
                    }, {
                        "_id": "60666c42cc7b410027a1a9b5",
                        "name": "Говяжий метеорит (отбивная)",
                        "type": "main",
                        "proteins": 800,
                        "fat": 800,
                        "carbohydrates": 300,
                        "calories": 2674,
                        "price": 3000,
                        "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                        "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                        "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                        "__v": 0
                    }
                ]
            }
        }, {
            type: types.CLEAR_CONSTRUCTOR
        })).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        });
    });

    it('should handle CHANGE_CONSTRUCTOR_INGREDIENT_POSITION', () => {
        let state = burgerConstructorReducer({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: []
            }
        }, {
            type: types.ADD_CONSTRUCTOR_INGREDIENT,
            item: {
                "_id": "60666c42cc7b410027a1a9b5",
                "name": "Говяжий метеорит (отбивная)",
                "type": "main",
                "proteins": 800,
                "fat": 800,
                "carbohydrates": 300,
                "calories": 2674,
                "price": 3000,
                "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                "__v": 0
            }
        });
        state = burgerConstructorReducer(state, {
            type: types.ADD_CONSTRUCTOR_INGREDIENT,
            item: {
                "_id": "60666c42cc7b410027a1a9b6",
                "name": "Биокотлета из марсианской Магнолии",
                "type": "main",
                "proteins": 420,
                "fat": 142,
                "carbohydrates": 242,
                "calories": 4242,
                "price": 424,
                "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                "__v": 0
            }
        });
        state = {
            ...burgerConstructorReducer(state, {
                type: types.CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
                item: state.constructorIngredients.ingredients[0],
                index: 1
            })
        };
        state.constructorIngredients.ingredients.forEach(ingredient => {
            delete ingredient.uid;
        });
        expect(state).toEqual({
            ingredients: [],
            ingredientsRequest: false,
            ingredientsFailed: false,
            constructorIngredients: {
                bun: null,
                ingredients: [{
                    "_id": "60666c42cc7b410027a1a9b6",
                    "name": "Биокотлета из марсианской Магнолии",
                    "type": "main",
                    "proteins": 420,
                    "fat": 142,
                    "carbohydrates": 242,
                    "calories": 4242,
                    "price": 424,
                    "image": "https://code.s3.yandex.net/react/code/meat-01.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
                    "__v": 0
                }, {
                    "_id": "60666c42cc7b410027a1a9b5",
                    "name": "Говяжий метеорит (отбивная)",
                    "type": "main",
                    "proteins": 800,
                    "fat": 800,
                    "carbohydrates": 300,
                    "calories": 2674,
                    "price": 3000,
                    "image": "https://code.s3.yandex.net/react/code/meat-04.png",
                    "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
                    "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
                    "__v": 0
                }]
            }
        });
    });
});