import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from '../../services/hooks';
import { ADD_CONSTRUCTOR_INGREDIENT } from '../../services/actions/burger-constructor';
import BurgerComponents from './burger-components/burger-components';
import styles from './burger-constructor.module.css';
import Info from './info/info';

function BurgerConstructor() {
    const dispatch = useDispatch();

    const [, dropTarget] = useDrop({
        accept: 'ingredients',
        drop(item) {
            dispatch({
                type: ADD_CONSTRUCTOR_INGREDIENT,
                item
            });
        }
    });

    return (
        <section
            ref={dropTarget}
            className={`${styles.wrapper} pt-25 pl-4`}
        >
            <BurgerComponents />
            <Info />
        </section>
    );
}

export default BurgerConstructor;