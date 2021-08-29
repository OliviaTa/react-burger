import { FC } from "react";
import OrdersStats from "../components/orders-stats/orders-stats";
import Orders from "../components/orders/orders";
import { useSelector } from "../services/hooks";
import styles from './home.module.css';

export const FeedPage: FC = () => {
    const orders = useSelector(state => state.allOrders.ordersData?.orders || []);

    return (
        <>
            <h1 className={`${styles.container} text text_type_main-large mb-5 mt-10`}>Лента заказов</h1>
            <main className={styles.main}>
                <section className={styles.orders}>
                    <Orders orders={orders} />
                </section>
                <OrdersStats />
            </main>
        </>
    );
};