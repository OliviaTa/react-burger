import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { getFormattedDate, getOrdersIngredients, getTotalCost } from '../../utils';
import OrderStatus from '../orders/order-card/order-status/order-status';
import styles from './order-info.module.css';

const OrderInfo = () => {
    const { id } = useParams();
    const { pathname } = useLocation();

    const allOrders = useSelector(state => state.allOrders.ordersData.orders || []);
    const userOrders = useSelector(state => state.userOrders.userOrdersData.orders || []);
    const orders = pathname.includes('/profile/orders')
        ? userOrders
        : allOrders;

    const ingredients = useSelector(state => state.burgerConstructor.ingredients);
    const filteredOrders = getOrdersIngredients(orders.filter(item => item._id === id), ingredients);

    if (!filteredOrders.length) {
        return null;
    }

    const order = filteredOrders[0];

    const ingredientsWithCount = order.ingredients
        .map(item => ({ ...item, count: order.ingredients.filter(element => item._id === element._id).length * (item.type === 'bun' ? 2 : 1) }))
        .filter((item, index) => order.ingredients.findIndex(element => element._id === item._id) === index);

    return (
        <div className={`${styles.wrapper} text text_type_main-default`}>
            <div className='mb-15'>
                <h1 className="text text_type_main-medium mb-2">{order.name}</h1>
                <OrderStatus status={order.status} />
            </div>
            <div className='mb-10'>
                <h2 className="text text_type_main-medium mb-6">Состав:</h2>
                <div className={`${styles.ingredients} pr-8`}>
                    {ingredientsWithCount.map((ingredient, index) => (
                        <div key={index} className={styles.ingredient}>
                            <img className={styles.image} src={ingredient.image} alt='ingredient' />
                            <div className={styles.name}>{ingredient.name}</div>
                            <div className={styles.price}>
                                <div className='text text_type_digits-default'>{`${ingredient.count} x ${ingredient.price}`}</div>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.date}>{getFormattedDate(order.createdAt)}</div>
                <div className={styles.totalPrice}>
                    <div className='text text_type_digits-default'>{getTotalCost(order.ingredients)}</div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;