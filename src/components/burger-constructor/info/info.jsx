import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { ConstructorContext } from '../../../utils/appContext';
import Modal from '../../modal/modal';
import OrderDetails from '../../modal/order-details/order-details';
import styles from './info.module.css';

function Info() {
    const { constructorState } = React.useContext(ConstructorContext);

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState('');

    const onButtonClick = () => {
        const burgersIdList = constructorState.burgersData.filter(item => item.count > 0).map(item => item._id);

        const getOrderData = async () => {
            try {
                const res = await fetch('https://norma.nomoreparties.space/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ingredients: burgersIdList
                    })
                });

                if (res.ok) {
                    const data = await res.json();
                    if (data.success) {
                        setOrderNumber(data.order.number);
                    } else {
                        Promise.reject(`Ошибка ${data.message}`);
                    }
                } else {
                    Promise.reject(`Ошибка ${res.status}`)
                }
            } catch (err) {
                console.log(err);
            }
        };

        getOrderData();

        setIsModalOpen(true);
    };

    return (
        <div className={styles.info} id='info'>
            <div className={`${styles.price} mr-10`}>
                <span className='text_type_digits-medium mr-2'>{constructorState.totalPrice}</span>
                <CurrencyIcon type="primary" />
            </div>
            <Button
                type="primary"
                size="large"
                onClick={onButtonClick}
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

export default Info;