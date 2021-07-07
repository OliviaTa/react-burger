import PropTypes from 'prop-types';
import React from 'react';
import { ConstructorContext } from '../../../utils/appContext';
import { tabPropTypes } from '../../../utils/propTypesShapes';
import IngredientDetails from '../../modal/ingredient-details/ingredient-details';
import Modal from '../../modal/modal';
import IngredientsSection from './ingredients-section/ingredients-section';
import style from './ingredients.module.css';

function Ingredients({ tabs }) {
    const { constructorState } = React.useContext(ConstructorContext);

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [currentItem, setCurrentItem] = React.useState();
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
                                key={item.id}
                                items={constructorState.burgersData.filter(elem => elem.type === item.id)}
                                onIngredientClick={openModal}
                            />
                        );
                    })
                }
            </div >
            <Modal
                header={modalHeader}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <IngredientDetails item={currentItem} />
            </Modal>
        </>
    );
}

Ingredients.propTypes = {
    tabs: PropTypes.arrayOf(tabPropTypes.isRequired)
};

export default Ingredients;