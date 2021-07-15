import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { REMOVE_CONSTRUCTOR_INGREDIENT } from "../../../services/actions/burger-constructor";
import "./burger-components.css";

function BurgerComponents() {
    const { bun, ingredients } = useSelector(state => state.burgerConstructor.constructorIngredients);
    const dispatch = useDispatch();

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
            <div className='scrolled-elements'>
                {ingredients
                    .map((item, index) => {
                        const deleteItem = () => {
                            dispatch({
                                type: REMOVE_CONSTRUCTOR_INGREDIENT,
                                index
                            });
                        };

                        return (
                            <div className='burger_component mb-4' key={uuidv4()}>
                                <div className='drag_icon'>
                                    <DragIcon type="primary" />
                                </div>
                                <ConstructorElement
                                    text={item.name}
                                    thumbnail={item.image}
                                    price={item.price}
                                    handleClose={deleteItem}
                                />
                            </div>
                        );
                    }).filter(x => x)}
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