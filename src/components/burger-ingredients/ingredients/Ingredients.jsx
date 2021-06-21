import React from 'react';
import IngredientsSection from './ingredients-section/IngredientsSection';
import style from './Ingredients.module.css';

class Ingredients extends React.Component {
    state = {
        heightIngredients: {
            height: 'auto'
        }
    };

    componentDidMount() {
        const ingredients = document.querySelector('.' + style.ingredients);
        this.setState({
            heightIngredients: {
                height: document.documentElement.clientHeight - ingredients.getBoundingClientRect().y
            }
        });
    }

    render() {
        return (
            <div className={style.ingredients} style={this.state.heightIngredients}>
                {
                    this.props.tabs.map((item) => {
                        return (
                            <IngredientsSection
                                title={item.title}
                                key={item.id}
                                items={this.props.data.filter(elem => elem.type === item.id)} />
                        );
                    })
                }
            </div >
        );
    }
}

export default Ingredients;