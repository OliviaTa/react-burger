import OrdersStats from "../components/orders-stats/orders-stats";
import Orders from "../components/orders/orders";
import styles from './home.module.css';

export const FeedPage = () => {
    return (
        <>
            <h1 className={`${styles.container} text text_type_main-large mb-5 mt-10`}>Лента заказов</h1>
            <main className={styles.main}>
                <Orders />
                <OrdersStats />
            </main>
        </>
    );
};