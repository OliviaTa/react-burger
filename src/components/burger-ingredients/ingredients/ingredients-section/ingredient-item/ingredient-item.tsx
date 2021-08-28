import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { useHistory, useLocation } from 'react-router';
import { TBurgerConstructorItem } from '../../../../../types/app.types';
import styles from './ingredient-item.module.css';

interface IIngredientItemProps {
    item: TBurgerConstructorItem;
};

const IngredientItem: FC<IIngredientItemProps> = ({ item }) => {
    const history = useHistory();
    const location = useLocation();

    const [, dragRef] = useDrag({
        type: 'ingredients',
        item: item
    });

    const onClick = () => {
        history.push(`/ingredients/${item._id}`, { background: location });
    };

    return (
        <div
            className={styles.item}
            onClick={onClick}
            ref={dragRef}
        >
            <img className={`${styles.image} ml-4 mr-4 mb-1`} src={item.image} alt={item.name} />
            <div className={`${styles.price} mb-1`}>
                <span className='mr-2 text_type_digits-default'>{item.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div className={styles.name}>{item.name}</div>
            {item.count && item.count > 0 && <Counter count={item.count} size="default" />}
        </div>
    );
}

export default IngredientItem;