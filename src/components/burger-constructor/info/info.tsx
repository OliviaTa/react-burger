import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import loading from '../../../images/loading.svg';
import { getUser } from '../../../services/actions/auth';
import { getOrder } from '../../../services/actions/order';
import { useDispatch, useSelector } from '../../../services/hooks';
import Modal from '../../modal/modal';
import OrderDetails from '../../modal/order-details/order-details';
import styles from './info.module.css';

function Info() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { bun, ingredients } = useSelector(state => state.burgerConstructor.constructorIngredients);
    const { order, orderRequestSuccess, orderRequest } = useSelector(state => state.order);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const user = useSelector(state => state.auth.user);

    const totalPrice = useMemo<number>(() => {
        const ingredientsPrice = ingredients.reduce((acc, item) => acc + item.price, 0);
        const bunPrice = (bun ? bun.price * 2 : 0);
        return ingredientsPrice + bunPrice;
    }, [bun, ingredients]);

    const ingredientsIdList = useMemo<Array<string>>(() => {
        const list = ingredients.map(item => item._id);
        if (bun) list.push(bun._id);
        return list;
    }, [bun, ingredients]);

    const orderNumber = useMemo<number>(() => order ? order?.number : 0, [order]);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const onButtonClick = () => {
        if (!user) {
            history.push({
                pathname: '/login',
                state: {
                    from: '/'
                }
            });
        } else {
            if (!ingredientsIdList.length) return;

            dispatch(getOrder(ingredientsIdList));
            setIsModalOpen(true);
        }
    };

    return (
        <div
            className={`${styles.info} ${orderRequest ? styles.disabledButton : ''}`}
            id='info'
        >
            <div className={`${styles.price} mr-10`}>
                <span className='text_type_digits-medium mr-2'>{totalPrice}</span>
                <CurrencyIcon type="primary" />
            </div>
            <Button
                type="primary"
                size="large"
                onClick={onButtonClick}
            >
                {orderRequest
                    ? <img className='ml-10 mr-10' src={loading} alt='loading' width="18" height="18" />
                    : 'Оформить заказ'
                }
            </Button>
            {isModalOpen && orderRequestSuccess && <Modal onClose={() => setIsModalOpen(false)}>
                <OrderDetails orderNumber={orderNumber} />
            </Modal>}
        </div>
    );
}

export default Info;