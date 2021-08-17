import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Orders from "../components/orders/orders";
import { WS_USER_ORDERS_CONNECTION_DISCONNECT, WS_USER_ORDERS_CONNECTION_START } from "../services/actions/userOrders";
import styles from "./orders.module.css";

export function OrdersPage() {
    const dispatch = useDispatch();

    const orders = useSelector(state => state.userOrders.userOrdersData.orders || []);

    useEffect(() => {
        dispatch({ type: WS_USER_ORDERS_CONNECTION_START });

        return () => dispatch({ type: WS_USER_ORDERS_CONNECTION_DISCONNECT });
    }, [])

    return (
        <section className={styles.orders}>
            <Orders orders={orders} showStatus={true} />
        </section>
    );
}