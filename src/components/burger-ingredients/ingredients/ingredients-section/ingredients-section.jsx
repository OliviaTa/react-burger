import PropTypes from 'prop-types';
import { burgerConstructorPropTypes } from '../../../../utils/propTypesShapes';
import IngredientItem from './ingredient-item/ingredient-item';
import styles from './ingredients-section.module.css';

function IngredientsSection({ title, items, onIngredientClick }) {
    return (
        <section>
            <h2 className='text_type_main-medium mb-6'>{title}</h2>
            <div className={`${styles.ingredients} pl-4 pr-4 pb-10`}>
                {
                    items.map(item => {
                        return (
                            <IngredientItem
                                item={item}
                                key={item._id}
                                onClick={onIngredientClick}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
}

IngredientsSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(burgerConstructorPropTypes.isRequired)
};

export default IngredientsSection;