import { useSelector } from 'react-redux';
import styles from './orders-stats.module.css';

const OrdersStats = () => {
    const { orders, total, totalToday } = useSelector(store => store.allOrders.ordersData);
    console.log(orders);

    const readyOrders = orders
        ? orders
            .filter(order => order.status === 'done')
            .map(order => order.number)
        : [];
    const progressOrders = orders
        ? orders
            .filter(order => order.status === 'pending')
            .map(order => order.number)
        : [];

    return (
        <section className={styles.ordersStats}>
            <div className={`${styles.ordersBoard} mb-15`}>
                <div className={styles.done}>
                    <h2 className='text text_type_main-medium mb-6'>Готовы:</h2>
                    <ul className={`${styles.ready} ${styles.ordersList}`}>
                        {readyOrders.map(order => <li className='text text_type_digits-default' key={order}>{order}</li>)}
                    </ul>
                </div>
                <div>
                    <h2 className='text text_type_main-medium mb-6'>В работе:</h2>
                    <ul className={styles.ordersList}>
                        {progressOrders.map(order => <li className='text text_type_digits-default' key={order}>{order}</li>)}
                    </ul>
                </div>
            </div>
            <div className='mb-15'>
                <h2 className='text text_type_main-medium'>Выполнено за все время:</h2>
                <div className={`${styles.completedNumber} text text_type_digits-large`}>{total}</div>
            </div>
            <div>
                <h2 className='text text_type_main-medium'>Выполнено за сегодня:</h2>
                <div className={`${styles.completedNumber} text text_type_digits-large`}>{totalToday}</div>
            </div>
        </section>
    );
};

export default OrdersStats;