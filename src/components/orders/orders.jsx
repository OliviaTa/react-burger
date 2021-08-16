import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getOrdersIngredients } from "../../utils";
import Modal from "../modal/modal";
import OrderInfo from "../order-info/order-info";
import OrderCard from "./order-card/order-card";
import styles from './orders.module.css';

const Orders = () => {
    const orders = useSelector(state => state.allOrders.ordersData.orders || []);
    const ingredients = useSelector(state => state.burgerConstructor.ingredients);

    const ordersList = useMemo(() => getOrdersIngredients(orders, ingredients), [orders, ingredients]);

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const openModal = (order) => {
        window.history.replaceState(null, '', `/feed/${order._id}`);
        setCurrentOrder(order);
        setModalOpen(true);
    };
    const closeModal = () => {
        window.history.replaceState(null, '', '/feed');
        setCurrentOrder(null);
        setModalOpen(false);
    }

    return (
        <>
            <section className={styles.orders}>
                <div className={styles.orderList}>
                    {ordersList.map(order => <OrderCard key={order._id} order={order} onOrderClick={openModal} />)}
                </div>
            </section>
            {isModalOpen && <Modal
                onClose={closeModal}
                header={`#${currentOrder.number}`}
                headerClassName='text text_type_digits-default'
            >
                <OrderInfo order={currentOrder} />
            </Modal>}
        </>
    );
};

export default Orders;