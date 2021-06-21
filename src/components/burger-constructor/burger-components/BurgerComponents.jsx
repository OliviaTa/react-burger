import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import "./BurgerComponents.css";

class BurgerComponents extends React.Component {
    state = {
        heightIngredients: {
            height: 'auto'
        }
    };

    componentDidMount() {
        const ingredientsCoords = document.querySelector('.scrolled-elements').getBoundingClientRect();
        const bottomBunElement = document.querySelector('.bottom-bun');
        const infoElementCoords = document.querySelector('#info').getBoundingClientRect();

        const bottomElementsHeight = bottomBunElement ?
            infoElementCoords.bottom - bottomBunElement.getBoundingClientRect().y :
            document.documentElement.clientHeight - infoElementCoords.y;

        const heightIngredients = document.documentElement.clientHeight - ingredientsCoords.y - bottomElementsHeight;

        if (ingredientsCoords.height > heightIngredients) {
            this.setState({
                heightIngredients: {
                    height: heightIngredients
                }
            });
        }
    }

    render() {
        let elements = [];
        let buns = '';

        for (let i = 0; i < this.props.data.length; i++) {
            const item = this.props.data[i];

            if (item.type === 'bun') {
                buns = item;
                continue;
            }

            for (let j = 0; j < item.count; j++) {
                elements.push(
                    <div className='burger_component mb-4' key={`${i}-${j}`}>
                        <div className='drag_icon'>
                            <DragIcon type="primary" />
                        </div>
                        <ConstructorElement
                            text={item.name}
                            thumbnail={item.image}
                            price={item.price}
                        />
                    </div>
                );
            }
        }

        return (
            <div className='ingredients mb-10'>
                {buns && <div className='mb-4' key='bun-top'>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${buns.name} (верх)`}
                        thumbnail={buns.image}
                        price={buns.price}
                    />
                </div>}
                <div className='scrolled-elements' style={this.state.heightIngredients}>
                    {elements}
                </div>
                {buns && <div className='bottom-bun pt-4'>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${buns.name} (низ)`}
                        thumbnail={buns.image}
                        price={buns.price}
                        key='bun-bottom'
                    />
                </div>}
            </div>
        );
    }



}

export default BurgerComponents;