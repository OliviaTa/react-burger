import { useSelector } from "../services/hooks";
import Orders from "../components/orders/orders";
import styles from "./orders.module.css";

export function OrdersPage() {
    const orders = useSelector(state => state.userOrders.userOrdersData?.orders || []);

    return (
        <section className={styles.orders}>
            <Orders orders={orders} showStatus={true} />
        </section>
    );
}