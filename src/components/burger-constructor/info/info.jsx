import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../services/actions/order';
import Modal from '../../modal/modal';
import OrderDetails from '../../modal/order-details/order-details';
import styles from './info.module.css';

function Info() {
    const dispatch = useDispatch();

    const { bun, ingredients } = useSelector(state => state.burgerConstructor.constructorIngredients);
    const { order, orderRequestSuccess } = useSelector(state => state.order);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const totalPrice = useMemo(() => {
        const ingredientsPrice = ingredients.reduce((acc, item) => acc + item.price, 0);
        const bunPrice = (bun ? bun.price * 2 : 0);
        return ingredientsPrice + bunPrice;
    }, [bun, ingredients]);

    const ingredientsIdList = useMemo(() => {
        const list = ingredients.map(item => item._id);
        if (bun) list.push(bun._id);
        return list;
    }, [bun, ingredients]);

    const orderNumber = useMemo(() => order.number ? order.number : 0, [order]);

    const onButtonClick = () => {
        if (!ingredientsIdList.length) return;

        dispatch(getOrder(ingredientsIdList));
        setIsModalOpen(true);
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
            {isModalOpen && orderRequestSuccess && <Modal onClose={() => setIsModalOpen(false)}>
                <OrderDetails orderNumber={orderNumber} />
            </Modal>}
        </div>
    );
}

export default Info;