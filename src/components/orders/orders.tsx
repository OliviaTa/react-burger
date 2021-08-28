import { FC, useMemo } from "react";
import { useSelector } from "../../services/hooks";
import { TBurgerConstructorItem, TOrderItem } from '../../types/app.types';
import { getOrdersIngredients } from "../../utils";
import OrderCard from "./order-card/order-card";
import styles from './orders.module.css';

interface IOrdersProps {
    orders: Array<TOrderItem>;
    showStatus?: boolean;
};

const Orders: FC<IOrdersProps> = ({ orders, showStatus = false }) => {
    const ingredients = useSelector(state => state.burgerConstructor.ingredients);
    const ordersList = useMemo<Array<TOrderItem<TBurgerConstructorItem>>>(() => getOrdersIngredients(orders, ingredients), [orders, ingredients]);

    return (
        <>
            <div className={styles.orderList}>
                {ordersList.map(order => {
                    return order
                        ? <OrderCard key={order._id} order={order} showStatus={showStatus} />
                        : null;
                })}
            </div>
        </>
    );
};

export default Orders;