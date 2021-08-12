import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-card.module.css';

const OrderCard = ({ order }) => {
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

    return (
        <div className={`${styles.card} p-6`}>
            <div className={`${styles.header} mb-6`}>
                <div className="text text_type_digits-default">{`#${order.id}`}</div>
                <div className={styles.timestamp}>{order.timestamp}</div>
            </div>
            <div className='text text_type_main-medium mb-6'>{order.burgerName}</div>
            <div className={styles.content}>
                <div className={styles.images}>
                    {addIngredient && (
                        <div className={styles.addIngredient}>
                            <img className={styles.image} src={addIngredient.image} alt='ingredient' />
                            <div className={styles.ingredientsCount}>{`+${addIngredient.count}`}</div>
                        </div>
                    )}
                    {ingredients.reverse().map((ingredient, index) => (
                        <img className={styles.image} key={index} src={ingredient.image} alt='ingredient' />
                    ))}
                </div>
                <div className={styles.price}>
                    <div className='text text_type_digits-default mr-2'>{order.price}</div>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};

export default OrderCard;