import { TBurgerConstructorItem, TOrderItem } from "./app.types";

export type TOrdersData = {
    orders: Array<TOrderItem>;
    total: number;
    totalToday: number;
};

export type TUser = {
    email: string;
    name: string;
};

export type TOwner = TUser & {
    createdAt: string;
    updatedAt: string;
};

export type TOrderInfo = {
    _id: string;
    name: string;
    number: number;
    status: string;
    createdAt: string;
    ingredients: TBurgerConstructorItem[];
    owner: TOwner;
    price: number;
    updatedAt: string;
};