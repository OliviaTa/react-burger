import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../modal/modal';
import OrderDetails from '../../modal/order-details/order-details';
import styles from './info.module.css';

function Info({ totalPrice }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState('034536');

    return (
        <div className={styles.info} id='info'>
            <div className={`${styles.price} mr-10`}>
                <span className='text_type_digits-medium mr-2'>{totalPrice}</span>
                <CurrencyIcon type="primary" />
            </div>
            <Button
                type="primary"
                size="large"
                onClick={() => setIsModalOpen(true)}
            >
                Оформить заказ
            </Button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <OrderDetails orderNumber={orderNumber} />
            </Modal>
        </div>
    );
}

Info.propTypes = {
    totalPrice: PropTypes.number.isRequired
}

export default Info;