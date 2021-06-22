import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { burgerConstructorPropTypes } from '../../../utils/propTypesShapes';
import "./BurgerComponents.css";

function BurgerComponents({ data }) {
    const bun = data.find(item => item.type === 'bun');

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
                {data.map(item => {
                    return (
                        item.type !== 'bun' ?
                            <div className='burger_component mb-4' key={item._id}>
                                <div className='drag_icon'>
                                    <DragIcon type="primary" />
                                </div>
                                <ConstructorElement
                                    text={item.name}
                                    thumbnail={item.image}
                                    price={item.price}
                                />
                            </div> :
                            null
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

BurgerComponents.propTypes = {
    data: PropTypes.arrayOf(burgerConstructorPropTypes.isRequired)
};

export default BurgerComponents;