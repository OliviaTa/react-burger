import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT } from '../../../services/actions/burger-constructor';
import { tabPropTypes } from '../../../utils/propTypesShapes';
import IngredientDetails from '../../modal/ingredient-details/ingredient-details';
import Modal from '../../modal/modal';
import IngredientsSection from './ingredients-section/ingredients-section';
import style from './ingredients.module.css';

function Ingredients({ tabs }) {
    const dispatch = useDispatch();

    const burgersData = useSelector(state => state.burgerConstructor.ingredients);
    const { bun, ingredients } = useSelector(state => state.burgerConstructor.constructorIngredients);
    const currentIngredient = useSelector(state => state.burgerConstructor.currentIngredient);

    const burgersDataWithCount = useMemo(() => {
        let burgerIngredients = [...ingredients];
        if (bun) ingredients.push(bun);
        return burgersData.map(item => ({ ...item, count: burgerIngredients.filter(elem => elem._id === item._id).length }));
    }, [burgersData, bun, ingredients]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalHeader = 'Детали ингредиента';

    const openModal = (item) => {
        setIsModalOpen(true);
        dispatch({ type: SET_CURRENT_INGREDIENT, item });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        dispatch({ type: REMOVE_CURRENT_INGREDIENT });
    }

    return (
        <>
            <div className={style.ingredients}>
                {
                    tabs.map((item) => {
                        return (
                            <IngredientsSection
                                title={item.title}
                                id={item.id}
                                key={item.id}
                                items={burgersDataWithCount.filter(elem => elem.type === item.id)}
                                onIngredientClick={openModal}
                            />
                        );
                    })
                }
            </div >
            {isModalOpen && <Modal
                header={modalHeader}
                onClose={closeModal}
            >
                <IngredientDetails item={currentIngredient} />
            </Modal>}
        </>
    );
}

Ingredients.propTypes = {
    tabs: PropTypes.arrayOf(tabPropTypes.isRequired)
};

export default Ingredients;