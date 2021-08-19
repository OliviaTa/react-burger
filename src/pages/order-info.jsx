import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import OrderInfo from "../components/order-info/order-info";
import { getOrdersIngredients } from "../utils";
import styles from './order-info.module.css';

export function OrderInfoPage() {
    const { id } = useParams();
    const { pathname } = useLocation();

    const allOrders = useSelector(state => state.allOrders.ordersData.orders || []);
    const userOrders = useSelector(state => state.userOrders.userOrdersData.orders || []);
    const orders = pathname.includes('/profile/orders')
        ? userOrders
        : allOrders;

    const ingredients = useSelector(state => state.burgerConstructor.ingredients);
    const filteredOrders = getOrdersIngredients(orders.filter(item => item._id === id), ingredients);

    console.log('orderInfoPage', filteredOrders);

    if (!filteredOrders.length) {
        return null;
    }

    return (
        <div className={`${styles.container} pt-30`}>
            <div className={`${styles.header} text text_type_digits-default`}>#{filteredOrders[0].number}</div>
            <OrderInfo />
        </div>
    );
}