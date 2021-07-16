import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { CHANGE_CONSTRUCTOR_INGREDIENT_POSITION, REMOVE_CONSTRUCTOR_INGREDIENT } from "../../../../services/actions/burger-constructor";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerComponent = ({ item, index }) => {
    const dispatch = useDispatch();

    const [{ isDragging }, drag] = useDrag({
        type: 'newPosition',
        item: { item, originalIndex: index },
        collect: monitor => ({ isDragging: monitor.isDragging() }),
        end: (item, monitor) => {
            if (!monitor.didDrop()) {
                dispatch({
                    type: CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
                    item: item.item,
                    index: item.originalIndex
                })
            }
        }
    });

    const [, drop] = useDrop({
        accept: 'newPosition',
        canDrop: () => false,
        hover: ({ item: draggedItem }) => {
            if (draggedItem.uid !== item.uid) {
                dispatch({
                    type: CHANGE_CONSTRUCTOR_INGREDIENT_POSITION,
                    item: draggedItem,
                    index: index
                })
            }
        }
    });

    const deleteItem = () => {
        dispatch({
            type: REMOVE_CONSTRUCTOR_INGREDIENT,
            index
        });
    };

    const opacity = isDragging ? 0 : 1;
    return (
        <div
            ref={(node) => drag(drop(node))}
            className='burger_component mb-4'
            style={{ opacity }}
        >
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
}

export default BurgerComponent;