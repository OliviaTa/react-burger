import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getFormattedDate, getTotalCost } from '../../../utils';
import { orderPropTypes } from '../../../utils/propTypesShapes';
import styles from './order-card.module.css';
import OrderStatus from './order-status/order-status';

const OrderCard = ({ order, showStatus }) => {
    const location = useLocation();
    const history = useHistory();

    const formattedDate = useMemo(() => getFormattedDate(order.createdAt), [order]);

    let ingredients = [];
    let addIngredient = null;

    if (order.ingredients.length > 5) {
        for (let i = 0; i < 5; i++) {
            ingredients.push(order.ingredients[i]);
        }
        addIngredient = { ...order.ingredients[5], count: order.ingredients.length - 5 };
    } else {
        ingredients = [...order.ingredients];
    }

    const onOrderClick = () => {
        history.push(`${location.pathname}/${order._id}`, { background: location, orderNumber: order.number });
    };

    return (
        <div className={`${styles.card} p-6`} onClick={onOrderClick}>
            <div className={`${styles.header} mb-6`}>
                <div className="text text_type_digits-default">{`#${order.number}`}</div>
                <div className={styles.timestamp}>{formattedDate}</div>
            </div>
            <div className='text text_type_main-medium'>{order.name}</div>
            {showStatus && <OrderStatus status={order.status} />}
            <div className={`${styles.content} mt-6`}>
                <div className={styles.images}>
                    {addIngredient && (
                        <div className={styles.addIngredient}>
                            <img className={styles.image} src={addIngredient.image} alt='ingredient' />
                            <div className={styles.ingredientsCount}>{`+${addIngredient.count}`}</div>
                        </div>
                    )}
                    {ingredients.reverse().map((ingredient, index) => {
                        return ingredient
                            ? <img className={styles.image} key={index} src={ingredient.image} alt='ingredient' />
                            : null;
                    }
                    )}
                </div>
                <div className={styles.price}>
                    <div className='text text_type_digits-default mr-2'>{getTotalCost(order.ingredients)}</div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};

OrderCard.propTypes = {
    order: orderPropTypes.isRequired,
    showStatus: PropTypes.bool
};

export default OrderCard;