import PropTypes from 'prop-types';
import checkMarkIconPath from '../../../images/graphics.png';
import styles from './order-details.module.css';

function OrderDetails({ orderNumber }) {
    return (
        <div className={`${styles.orderDetails} pt-4 pb-15 text text_type_main-default`}>
            <div className={`${styles.orderNumber} mb-8 text text_type_digits-large`}>{orderNumber}</div>
            <div className='mb-15 text text_type_main-medium'>идентификатор заказа</div>
            <img className='mb-15' src={checkMarkIconPath} alt='Check mark icon' width='107' height='102' />
            <div className='mb-2'>Ваш заказ начали готовить</div>
            <div className={styles.textColor}>Дождитесь готовности на орбитальной станции</div>
        </div>
    );
}

OrderDetails.propTypes = {
    orderNumber: PropTypes.string.isRequired
};

export default OrderDetails;