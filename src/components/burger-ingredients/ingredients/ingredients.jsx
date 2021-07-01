import PropTypes from 'prop-types';
import React from 'react';
import { burgerConstructorPropTypes, tabPropTypes } from '../../../utils/propTypesShapes';
import Modal from '../../modal/modal';
import IngredientsSection from './ingredients-section/ingredients-section';
import style from './ingredients.module.css';

function Ingredients({ tabs, data }) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const modalHeader = 'Детали ингредиента';

    return (
        <>
            <div className={style.ingredients}>
                {
                    tabs.map((item) => {
                        return (
                            <IngredientsSection
                                title={item.title}
                                key={item.id}
                                items={data.filter(elem => elem.type === item.id)}
                                onIngredientClick={() => setIsModalOpen(true)}
                            />
                        );
                    })
                }
            </div >
            <Modal
                header={modalHeader}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

Ingredients.propTypes = {
    tabs: PropTypes.arrayOf(tabPropTypes.isRequired),
    data: PropTypes.arrayOf(burgerConstructorPropTypes.isRequired)
};

export default Ingredients;