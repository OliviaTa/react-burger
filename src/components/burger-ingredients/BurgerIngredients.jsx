import PropTypes from 'prop-types';
import React from 'react';
import { burgerConstructorPropTypes } from '../../utils/propTypesShapes';
import styles from './BurgerIngredients.module.css';
import Ingredients from './ingredients/Ingredients';
import Tabs from './tabs/Tabs';

class BurgerIngredients extends React.Component {
    state = {
        activeTab: 'bun',
        tabs: [
            {
                id: 'bun',
                title: 'Булки'
            },
            {
                id: 'sauce',
                title: 'Соусы'
            }, {
                id: 'main',
                title: 'Начинки'
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
                    data={this.state.tabs}
                    activeTab={this.state.activeTab}
                    onClick={this.setActiveTab}
                />
                <Ingredients
                    tabs={this.state.tabs}
                    data={this.props.data}
                />
            </div>
        );
    }
}



BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(burgerConstructorPropTypes.isRequired)
};

export default BurgerIngredients;