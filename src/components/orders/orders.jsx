import OrderCard from "./order-card/order-card";
import styles from './orders.module.css';

const Orders = () => {
    const orderList = [
        {
            id: '034535',
            timestamp: 'Сегодня, 16:20, i-GMT+3',
            burgerName: 'Death Star Starship Main бургер',
            price: 480,
            ingredients: [
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                }
            ]
        },
        {
            id: '034534',
            timestamp: 'Сегодня, 16:20, i-GMT+3',
            burgerName: 'Death Star Starship Main бургер',
            price: 480,
            ingredients: [
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/sauce-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/sauce-03.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/meat-03.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/meat-04.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/mineral_rings.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/core.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/cheese.png"
                }
            ]
        },
        {
            id: '034533',
            timestamp: 'Сегодня, 16:20, i-GMT+3',
            burgerName: 'Death Star Starship Main бургер',
            price: 480,
            ingredients: [
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                }
            ]
        },
        {
            id: '034532',
            timestamp: 'Сегодня, 16:20, i-GMT+3',
            burgerName: 'Death Star Starship Main бургер',
            price: 480,
            ingredients: [
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                },
                {
                    image: "https://code.s3.yandex.net/react/code/bun-02.png"
                }
            ]
        }
    ];

    return (
        <section className={styles.orders}>
            <div className={styles.orderList}>
                {orderList.map(order => <OrderCard key={order.id} order={order} />)}
            </div>
        </section>
    );
};

export default Orders;