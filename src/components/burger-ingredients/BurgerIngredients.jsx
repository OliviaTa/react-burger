import React from 'react';
import bun1Path from '../../images/bun-01.png';
import bun2Path from '../../images/bun-02.png';
import sauce1Path from '../../images/sauce-01.png';
import sauce2Path from '../../images/sauce-02.png';
import sauce3Path from '../../images/sauce-03.png';
import sauce4Path from '../../images/sauce-04.png';
import styles from './BurgerIngredients.module.css';
import Ingredients from './ingredients/Ingredients';
import Tabs from './tabs/Tabs';

class BurgerIngredients extends React.Component {
    state = {
        activeTab: 'buns',
        data: [
            {
                id: 'buns',
                title: 'Булки',
                items: [
                    {
                        name: 'Краторная булка N-200i',
                        price: 20,
                        image: bun2Path,
                        count: 1
                    },
                    {
                        name: 'Флюоресцентная булка R2-D3',
                        price: 20,
                        image: bun1Path,
                        count: 0
                    },
                ]
            },
            {
                id: 'sauces',
                title: 'Соусы',
                items: [
                    {
                        name: 'Соус Spicy-X',
                        price: 30,
                        image: sauce2Path,
                        count: 0
                    },
                    {
                        name: 'Соус фирменный Space Sauce',
                        price: 30,
                        image: sauce4Path,
                        count: 0
                    },
                    {
                        name: 'Соус традиционный галактический',
                        price: 30,
                        image: sauce3Path,
                        count: 1
                    },
                    {
                        name: 'Соус с шипами Антарианского плоскоходца',
                        price: 30,
                        image: sauce1Path,
                        count: 0
                    },
                ]
            },
            {
                id: 'toppings',
                title: 'Начинки',
                items: [
                    {
                        name: 'Филе Люминесцентного тетраодонтимформа',
                        price: 300,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Мясо бессмертных моллюсков Protostomia',
                        price: 300,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Говяжий метеорит (отбивная)',
                        price: 300,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Биокотлета из марсианской Магнолии',
                        price: 300,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Плоды фалленианского дерева',
                        price: 80,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Кристаллы марсианских альфа-сахаридов',
                        price: 80,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Хрустящие минеральные кольца',
                        price: 80,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Мини-салат Экзо-Плантаго',
                        price: 80,
                        image: '',
                        count: 0
                    },
                    {
                        name: 'Сыр с астероидной плесенью',
                        price: 80,
                        image: '',
                        count: 0
                    },
                ]
            }
        ]
    };

    setActiveTab = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        return (
            <div className={`${styles.wrapper} pt-10`}>
                <h1 className="text_type_main-large mb-5">Соберите бургер</h1>
                <Tabs
                    data={this.state.data}
                    activeTab={this.state.activeTab}
                    clickFunc={this.setActiveTab}
                />
                <Ingredients
                    tabs={this.state.data}
                />
            </div>
        );
    }
}

export default BurgerIngredients;