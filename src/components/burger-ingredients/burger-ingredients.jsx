import React from 'react';
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

    return (
        <div className={`${styles.wrapper} pt-10 mr-10`}>
            <h1 className="text_type_main-large mb-5">Соберите бургер</h1>
            <Tabs
                data={tabs}
                activeTab={activeTab}
                onClick={onTabClick}
            />
            <Ingredients tabs={tabs} />
        </div>
    );
}

export default BurgerIngredients;