import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { tabPropTypes } from '../../../utils/propTypesShapes';
import IngredientsSection from './ingredients-section/ingredients-section';
import style from './ingredients.module.css';

function Ingredients({ tabs, onScroll }) {
    const burgersData = useSelector(state => state.burgerConstructor.ingredients);
    const { bun, ingredients } = useSelector(state => state.burgerConstructor.constructorIngredients);

    const burgersDataWithCount = useMemo(() => {
        let burgerIngredients = [...ingredients];
        if (bun) {
            burgerIngredients.push(bun);
            burgerIngredients.push(bun);
        }
        return burgersData.map(item => ({ ...item, count: burgerIngredients.filter(elem => elem._id === item._id).length }));
    }, [burgersData, bun, ingredients]);

    return (
        <>
            <div className={style.ingredients} onScroll={onScroll}>
                {
                    tabs.map((item) => {
                        return (
                            <IngredientsSection
                                title={item.title}
                                id={item.id}
                                key={item.id}
                                items={burgersDataWithCount.filter(elem => elem.type === item.id)}
                            />
                        );
                    })
                }
            </div >
        </>
    );
}

Ingredients.propTypes = {
    tabs: PropTypes.arrayOf(tabPropTypes.isRequired),
    onScroll: PropTypes.func
};

export default Ingredients;