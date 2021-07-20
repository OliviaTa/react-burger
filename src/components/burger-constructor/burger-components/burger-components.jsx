import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import BurgerComponent from "./burger-component/burger-component";
import "./burger-components.css";


function BurgerComponents() {
    const { bun, ingredients } = useSelector(state => state.burgerConstructor.constructorIngredients);
    const [, drop] = useDrop({
        accept: 'newPosition'
    });

    return (
        <div className='ingredients mb-10'>
            {bun && <div className='mb-4'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    thumbnail={bun.image}
                    price={bun.price}
                />
            </div>}
            <div ref={drop} className='scrolled-elements'>
                {ingredients.map((item, index) => <BurgerComponent key={item.uid} item={item} index={index} />)}
            </div>
            {bun && <div className='bottom-bun pt-4'>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    thumbnail={bun.image}
                    price={bun.price}
                />
            </div>}
        </div>
    );
}

export default BurgerComponents;