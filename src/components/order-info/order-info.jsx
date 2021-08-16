import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { getFormattedDate, getTotalCost } from '../../utils';
import styles from './order-info.module.css';

const OrderInfo = ({ order }) => {
    console.log(order);

    const formattedStatus = useMemo(() => {
        switch (order.status) {
            case 'done':
                return 'Выполнен';
            case 'pending':
                return 'В процессе';
            case 'created':
                return 'Создан';
            default:
                return '';
        }
    }, [order]);

    const ingredientsWithCount = useMemo(() => {
        return order.ingredients
            .map(item => ({ ...item, count: order.ingredients.filter(element => item._id === element._id).length * (item.type === 'bun' ? 2 : 1) }))
            .filter((item, index) => order.ingredients.findIndex(element => element._id === item._id) === index);
    }, [order]);

    return (
        <div className={`${styles.wrapper} text text_type_main-default`}>
            <div className='mb-15'>
                <h1 className="text text_type_main-medium mb-2">{order.name}</h1>
                <div className={styles.status}>{formattedStatus}</div>
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