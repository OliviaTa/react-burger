declare global {
    interface Window { '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__': any; }
}

export type TBurgerConstructorItem = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    count?: number;
    uid?: string;
};

export type TTabItem = {
    id: string;
    title: string;
};

export type TOrderItem<Ingredient = string> = {
    createdAt: string
    ingredients: Ingredient[];
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
};
