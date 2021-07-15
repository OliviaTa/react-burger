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

    const onScroll = (e) => {
        const targetTop = e.target.getBoundingClientRect().top;
        let sections = Array.from(e.target.querySelectorAll('section'));
        if (!sections.length) return;
        sections = sections.map(section => ({
            id: section.id,
            top: Math.abs(section.getBoundingClientRect().top - targetTop)
        }));

        sections.sort((a, b) => a.top < b.top ? -1 : 1);
        if (activeTab !== sections[0].id) setActiveTab(sections[0].id);
    };

    return (
        <div className={`${styles.wrapper} pt-10 mr-10`}>
            <h1 className="text_type_main-large mb-5">Соберите бургер</h1>
            <Tabs
                data={tabs}
                activeTab={activeTab}
                onClick={onTabClick}
            />
            <Ingredients tabs={tabs} onScroll={onScroll} />
        </div>
    );
}

export default BurgerIngredients;