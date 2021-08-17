import PropTypes from 'prop-types';
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getOrdersIngredients } from "../../utils";
import { orderPropTypes } from "../../utils/propTypesShapes";
import Modal from "../modal/modal";
import OrderInfo from "../order-info/order-info";
import OrderCard from "./order-card/order-card";
import styles from './orders.module.css';

const Orders = ({ orders, showStatus = false }) => {
    const { pathname } = useLocation();

    const ingredients = useSelector(state => state.burgerConstructor.ingredients);

    const ordersList = useMemo(() => getOrdersIngredients(orders, ingredients), [orders, ingredients]);

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const openModal = (order) => {
        window.history.replaceState(null, '', `${pathname}/${order._id}`);
        setCurrentOrder(order);
        setModalOpen(true);
    };
    const closeModal = () => {
        window.history.replaceState(null, '', pathname);
        setCurrentOrder(null);
        setModalOpen(false);
    }

    return (
        <>
            <div className={styles.orderList}>
                {ordersList.map(order => <OrderCard key={order._id} order={order} onOrderClick={openModal} showStatus={showStatus} />)}
            </div>
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

Orders.propTypes = {
    orders: PropTypes.arrayOf(orderPropTypes),
    showStatus: PropTypes.bool
};

export default Orders;