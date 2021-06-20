import React from 'react';
import IngredientsSection from './ingredients-section/IngredientsSection';

class Ingredients extends React.Component {
    render() {
        return (
            <div>
                {this.props.tabs.map((item) => {
                    return (
                        <IngredientsSection title={item.title} key={item.id} items={item.items} />
                    );
                })}
            </div>
        );
    }
}

export default Ingredients;