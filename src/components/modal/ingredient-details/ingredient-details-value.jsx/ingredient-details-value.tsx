import { FC } from 'react';
import styles from './ingredient-details-value.module.css';

interface IIngredientDetailsValueProps {
    text: string;
    value: number;
};

const IngredientDetailsValue: FC<IIngredientDetailsValueProps> = ({ text, value }) => {
    return (
        <div className={styles.value}>
            <div className='mb-2'>{text}</div>
            <div className='text text_type_digits-default'>{value}</div>
        </div>
    );
}

export default IngredientDetailsValue;