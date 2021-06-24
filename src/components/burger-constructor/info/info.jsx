import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './info.module.css'
import PropTypes from 'prop-types';

function Info({ totalPrice }) {
    return (
        <div className={styles.info} id='info'>
            <div className={`${styles.price} mr-10`}>
                <span className='text_type_digits-medium mr-2'>{totalPrice}</span>
                <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    );
}

Info.propTypes = {
    totalPrice: PropTypes.number.isRequired
}

export default Info;