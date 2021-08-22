import PropTypes from 'prop-types';
import styles from './order-status.module.css';

const OrderStatus = ({ status }) => {
    switch (status) {
        case 'done':
            return <div className={`${styles.done} mt-2`}>Выполнен</div>;
        case 'pending':
            return <div className={`${styles.pending} mt-2`}>Готовится</div>;
        case 'created':
            return <div className={`${styles.created} mt-2`}>Создан</div>;
        case 'canceled':
            return <div className={`${styles.canceled} mt-2`}>Отменен</div>;
        default:
            return null;
    }
};

OrderStatus.propTypes = {
    status: PropTypes.string
};

export default OrderStatus;