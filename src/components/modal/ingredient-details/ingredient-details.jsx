import { burgerConstructorPropTypes } from '../../../utils/propTypesShapes';
import IngredientDetailsValue from './ingredient-details-value.jsx/ingredient-details-value';
import styles from './ingredient-details.module.css';

function IngredientDetails({ item }) {
    return (
        <div className={styles.ingredientDetails}>
            <img className='mb-4' src={item.image_large} alt='ingredient' width='480' height='240' />
            <div className='mb-8 text text_type_main-medium'>{item.name}</div>
            <div className={`${styles.nutritions} text text_type_main-default`}>
                <IngredientDetailsValue text='Калории, ккал' value={item.calories} />
                <IngredientDetailsValue text='Белки, г' value={item.proteins} />
                <IngredientDetailsValue text='Жиры, г' value={item.fat} />
                <IngredientDetailsValue text='Углеводы, г' value={item.carbohydrates} />
            </div>
        </div>
    );
}

IngredientDetails.propTypes = {
    item: burgerConstructorPropTypes
};

export default IngredientDetails;