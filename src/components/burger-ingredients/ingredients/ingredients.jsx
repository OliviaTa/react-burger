import PropTypes from 'prop-types';
import { burgerConstructorPropTypes, tabPropTypes } from '../../../utils/propTypesShapes';
import IngredientsSection from './ingredients-section/ingredients-section';
import style from './ingredients.module.css';

function Ingredients({ tabs, data }) {
    return (
        <div className={style.ingredients}>
            {
                tabs.map((item) => {
                    return (
                        <IngredientsSection
                            title={item.title}
                            key={item.id}
                            items={data.filter(elem => elem.type === item.id)} />
                    );
                })
            }
        </div >
    );
}

Ingredients.propTypes = {
    tabs: PropTypes.arrayOf(tabPropTypes.isRequired),
    data: PropTypes.arrayOf(burgerConstructorPropTypes.isRequired)
};

export default Ingredients;