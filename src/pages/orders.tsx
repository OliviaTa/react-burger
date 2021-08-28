import { FC } from "react";
import Orders from "../components/orders/orders";
import { useSelector } from "../services/hooks";
import styles from "./orders.module.css";

export const OrdersPage: FC = () => {
    const orders = useSelector(state => state.userOrders.userOrdersData?.orders || []);

    return (
        <section className={styles.orders}>
            <Orders orders={orders} showStatus={true} />
        </section>
    );
}