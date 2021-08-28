import { TOrderItem, TBurgerConstructorItem } from './../types/app.types';
import { format, formatDistance, isToday, isYesterday } from "date-fns";
import ruLocale from "date-fns/locale/ru";

export const getFormattedDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = isToday(date)
        ? 'Сегодня'
        : isYesterday(date)
            ? 'Вчера'
            : `${formatDistance(date, new Date(), { locale: ruLocale })} назад`;
    return `${day}, ${format(date, 'HH:mm')} i-${format(date, 'z')}`;
};

export const getTotalCost = (ingredients: TBurgerConstructorItem[]) => {
    return ingredients.reduce((acc, item) => item.type === 'bun' ? (acc + item.price * 2) : (acc + item.price), 0);
};

export const getOrdersIngredients = (orders: TOrderItem[], ingredients: TBurgerConstructorItem[]) => {
    return orders.map(order => ({
        ...order,
        ingredients: order.ingredients.map(id => ingredients.filter(item => item._id === id)[0])
    }));
};