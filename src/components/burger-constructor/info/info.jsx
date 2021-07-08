import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import { ConstructorContext } from '../../../utils/appContext';
import Modal from '../../modal/modal';
import OrderDetails from '../../modal/order-details/order-details';
import { getOrderData } from '../../../utils/api';
import styles from './info.module.css';

function Info() {
    const { constructorState } = React.useContext(ConstructorContext);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(0);

    const totalPrice = useMemo(() => {
        const ingredientsPrice = constructorState.ingredients.reduce((acc, item) => acc + item.price, 0);
        const bunPrice = (constructorState.bun ? constructorState.bun.price : 0);
        return ingredientsPrice + bunPrice;
    },
        [constructorState]
    );

    const ingredientsIdList = useMemo(() => {
        const list = constructorState.ingredients.map(item => item._id);
        if (constructorState.bun) list.push(constructorState.bun._id);
        return list;
    }, [constructorState]);

    const onButtonClick = () => {
        if (!ingredientsIdList.length) return;

        getOrderData(ingredientsIdList)
            .then(data => {
                setOrderNumber(data.order.number);
                setIsModalOpen(true);
            })
            .catch(err => {
                console.log(err);
            });

    };

    return (
        <div className={styles.info} id='info'>
            <div className={`${styles.price} mr-10`}>
                <span className='text_type_digits-medium mr-2'>{totalPrice}</span>
                <CurrencyIcon type="primary" />
            </div>
            <Button
                type="primary"
                size="large"
                onClick={onButtonClick}
            >
                Оформить заказ
            </Button>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
                <OrderDetails orderNumber={orderNumber} />
            </Modal>}
        </div>
    );
}

export default Info;