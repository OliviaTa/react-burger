import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react';
import { ConstructorContext } from "../../../utils/appContext";
import "./burger-components.css";

function BurgerComponents() {
    const { constructorState, constructorDispatcher } = React.useContext(ConstructorContext);
    const filteredElements = constructorState.burgersData.filter(item => item.count > 0);

    const bun = filteredElements.find(item => item.type === 'bun');

    return (
        <div className='ingredients mb-10'>
            {bun && <div className='mb-4' key={`${bun._id}-top`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    thumbnail={bun.image}
                    price={bun.price}
                />
            </div>}
            <div className='scrolled-elements'>
                {filteredElements
                    .filter(item => item.type !== 'bun')
                    .map(item => {
                        const deleteItem = () => {
                            constructorDispatcher({ type: 'removeItem', payload: item });
                        };

                        return (
                            <div className='burger_component mb-4' key={item._id}>
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
            {bun && <div className='bottom-bun pt-4' key={`${bun._id}-bottom`}>
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