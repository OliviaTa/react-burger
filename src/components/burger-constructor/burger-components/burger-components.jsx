import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import { ConstructorContext } from "../../../utils/appContext";
import "./burger-components.css";
import { v4 as uuidv4 } from 'uuid';

function BurgerComponents() {
    const { constructorState, constructorDispatcher } = React.useContext(ConstructorContext);

    return (
        <div className='ingredients mb-10'>
            {constructorState.bun && <div className='mb-4'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${constructorState.bun.name} (верх)`}
                    thumbnail={constructorState.bun.image}
                    price={constructorState.bun.price}
                />
            </div>}
            <div className='scrolled-elements'>
                {constructorState.ingredients
                    .map((item, index) => {
                        const deleteItem = () => {
                            constructorDispatcher({ type: 'removeItem', payload: index });
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
            {constructorState.bun && <div className='bottom-bun pt-4'>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${constructorState.bun.name} (низ)`}
                    thumbnail={constructorState.bun.image}
                    price={constructorState.bun.price}
                />
            </div>}
        </div>
    );
}

export default BurgerComponents;