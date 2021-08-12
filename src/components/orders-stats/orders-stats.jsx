import styles from './orders-stats.module.css';

const OrdersStats = () => {
    const readyOrders = ['034533', '034532', '034530', '034527', '034525'];
    const progressOrders = ['034538', '034541', '034542'];

    return (
        <section className={styles.ordersStats}>
            <div className={`${styles.ordersBoard} mb-15`}>
                <div className={styles.done}>
                    <h2 className='text text_type_main-medium mb-6'>Готовы:</h2>
                    <ul className={`${styles.ready} ${styles.ordersList}`}>
                        {readyOrders.map(order => <li className='text text_type_digits-default'>{order}</li>)}
                    </ul>
                </div>
                <div>
                    <h2 className='text text_type_main-medium mb-6'>В работе:</h2>
                    <ul className={styles.ordersList}>
                        {progressOrders.map(order => <li className='text text_type_digits-default'>{order}</li>)}
                    </ul>
                </div>
            </div>
            <div className='mb-15'>
                <h2 className='text text_type_main-medium'>Выполнено за все время:</h2>
                <div className={`${styles.completedNumber} text text_type_digits-large`}>28 752</div>
            </div>
            <div>
                <h2 className='text text_type_main-medium'>Выполнено за сегодня:</h2>
                <div className={`${styles.completedNumber} text text_type_digits-large`}>138</div>
            </div>
        </section>
    );
};

export default OrdersStats;