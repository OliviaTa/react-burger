import React from 'react';
//import { BurgersDataContext, ConstructorContext } from '../../utils/appContext';
import styles from './burger-ingredients.module.css';
import Ingredients from './ingredients/ingredients';
import Tabs from './tabs/tabs';

function BurgerIngredients() {
    const [activeTab, setActiveTab] = React.useState('bun');

    const tabs = [
        {
            id: 'bun',
            title: 'Булки'
        }, {
            id: 'sauce',
            title: 'Соусы'
        }, {
            id: 'main',
            title: 'Начинки'
        }
    ];

    const onTabClick = (tab) => {
        setActiveTab(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }

    // check total price ingredients
    /*const { constructorDispatcher } = React.useContext(ConstructorContext);
    const { burgersData } = React.useContext(BurgersDataContext);
    const testProducts = () => {
        if (burgersData.length) {
            constructorDispatcher({ type: 'addItem', payload: burgersData[0] });
            constructorDispatcher({ type: 'addItem', payload: burgersData[2] });
            constructorDispatcher({ type: 'addItem', payload: burgersData[8] });
            constructorDispatcher({ type: 'addItem', payload: burgersData[2] });
        }
    }*/

    return (
        <div className={`${styles.wrapper} pt-10 mr-10`}>
            <h1 className="text_type_main-large mb-5">Соберите бургер</h1>
            <Tabs
                data={tabs}
                activeTab={activeTab}
                onClick={onTabClick}
            />
            <Ingredients tabs={tabs} />
            {/*<button onClick={testProducts}>Add</button>*/}
        </div>
    );
}

export default BurgerIngredients;