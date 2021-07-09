import PropTypes from 'prop-types';
import { useContext, useMemo, useState } from 'react';
import { BurgersDataContext, ConstructorContext } from '../../../utils/appContext';
import { tabPropTypes } from '../../../utils/propTypesShapes';
import IngredientDetails from '../../modal/ingredient-details/ingredient-details';
import Modal from '../../modal/modal';
import IngredientsSection from './ingredients-section/ingredients-section';
import style from './ingredients.module.css';

function Ingredients({ tabs }) {
    const { burgersData } = useContext(BurgersDataContext);
    const { constructorState } = useContext(ConstructorContext);
    const burgersDataWithCount = useMemo(() => {
        let ingredients = [...constructorState.ingredients];
        if (constructorState.bun) ingredients.push(constructorState.bun);

        return burgersData.map(item => ({ ...item, count: ingredients.filter(elem => elem._id === item._id).length }));
    }, [burgersData, constructorState]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState();
    const modalHeader = 'Детали ингредиента';

    const openModal = (item) => {
        setIsModalOpen(true);
        setCurrentItem(item);
    };

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
                onClose={() => setIsModalOpen(false)}
            >
                <IngredientDetails item={currentItem} />
            </Modal>}
        </>
    );
}

Ingredients.propTypes = {
    tabs: PropTypes.arrayOf(tabPropTypes.isRequired)
};

export default Ingredients;