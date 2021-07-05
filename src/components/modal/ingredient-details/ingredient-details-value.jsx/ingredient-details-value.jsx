import PropTypes from 'prop-types';
import styles from './ingredient-details-value.module.css';

function IngredientDetailsValue({ text, value }) {
    return (
        <div className={styles.value}>
            <div className='mb-2'>{text}</div>
            <div className='text text_type_digits-default'>{value}</div>
        </div>
    );
}

IngredientDetailsValue.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default IngredientDetailsValue;