import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';

function IngredientItem({ item }) {
    return (
        <div className={styles.item}>
            <img className={`${styles.image} ml-4 mr-4 mb-1`} src={item.image} alt={item.name} />
            <div className={`${styles.price} mb-1`}>
                <span className='mr-2 text_type_digits-default'>{item.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div className={styles.name}>{item.name}</div>
            {item.count > 0 && <Counter count={item.count} size="default" />}
        </div>
    );
}

export default IngredientItem;