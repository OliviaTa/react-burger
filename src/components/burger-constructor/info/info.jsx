import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../modal/modal';
import styles from './info.module.css';

function Info({ totalPrice }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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
            />
        </div>
    );
}

Info.propTypes = {
    totalPrice: PropTypes.number.isRequired
}

export default Info;