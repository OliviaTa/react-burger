import React from 'react';
import IngredientItem from './ingredient-item/IngredientItem';
import styles from './IngredientsSection.module.css';

class IngredientsSection extends React.Component {
    render() {
        return (
            <section>
                <h2 className='text_type_main-medium mb-6'>{this.props.title}</h2>
                <div className={`${styles.ingredients} pl-4 pr-4 pb-10`}>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <IngredientItem item={item} key={index} />
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

export default IngredientsSection;