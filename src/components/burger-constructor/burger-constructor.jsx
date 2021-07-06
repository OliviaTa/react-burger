import React from 'react';
import BurgerComponents from './burger-components/burger-components';
import styles from './burger-constructor.module.css';
import Info from './info/info';

function BurgerConstructor() {
    return (
        <section className={`${styles.wrapper} pt-25 pl-4`}>
            <BurgerComponents />
            <Info />
        </section>
    );
}

export default BurgerConstructor;