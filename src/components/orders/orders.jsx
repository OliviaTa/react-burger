import PropTypes from 'prop-types';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getOrdersIngredients } from "../../utils";
import { orderPropTypes } from "../../utils/propTypesShapes";
import OrderCard from "./order-card/order-card";
import styles from './orders.module.css';

const Orders = ({ orders, showStatus = false }) => {
    const ingredients = useSelector(state => state.burgerConstructor.ingredients);
    const ordersList = useMemo(() => getOrdersIngredients(orders, ingredients), [orders, ingredients]);

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

Orders.propTypes = {
    orders: PropTypes.arrayOf(orderPropTypes),
    showStatus: PropTypes.bool
};

export default Orders;