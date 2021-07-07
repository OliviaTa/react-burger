import React from 'react';
//import { ConstructorContext } from '../../utils/appContext';
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
    }

    // check total price ingredients
    /*const { constructorState, constructorDispatcher } = React.useContext(ConstructorContext);
    const testProducts = () => {
        if (constructorState.burgersData.length) {
            constructorDispatcher({ type: 'addItem', payload: constructorState.burgersData[0] });

            setTimeout(() => {
                constructorDispatcher({ type: 'addItem', payload: constructorState.burgersData[2] });
                constructorDispatcher({ type: 'addItem', payload: constructorState.burgersData[1] });
            }, 3000);
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