import PropTypes from 'prop-types';
import { burgerConstructorPropTypes } from '../../utils/propTypesShapes';
import BurgerComponents from './burger-components/BurgerComponents';
import styles from './BurgerConstructor.module.css';
import Info from './info/Info';

function BurgerConstructor({ data }) {
    const totalPrice = data.reduce((acc, curr) => acc + curr.price * curr.count, 0);

    return (
        <section className={`${styles.wrapper} pt-25 pl-4`}>
            <BurgerComponents data={data} />
            <Info totalPrice={totalPrice} />
        </section>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(burgerConstructorPropTypes.isRequired)
};

export default BurgerConstructor;