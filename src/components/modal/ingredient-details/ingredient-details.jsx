import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import IngredientDetailsValue from './ingredient-details-value.jsx/ingredient-details-value';
import styles from './ingredient-details.module.css';

function IngredientDetails() {
    const { id } = useParams();
    const history = useHistory();

    const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(state => state.burgerConstructor);
    const filteredIngredient = ingredients.filter(item => item._id === id);

    useEffect(() => {
        if (ingredientsFailed) {
            setTimeout(() => {
                history.replace('/');
            }, 3000)
        }
    }, [ingredientsFailed, history]);

    if (ingredientsRequest || (!ingredients.length && !ingredientsFailed)) {
        return null;
    }

    const item = filteredIngredient[0];

    return (
        <div className={styles.ingredientDetails}>
            {ingredientsFailed ? (
                <h1 className='text text_type_main-large'>Мы не смогли найти ваш ингредиент :(</h1>
            ) : (
                <>
                    <img className='mb-4' src={item.image_large} alt='ingredient' width='480' height='240' />
                    <div className='mb-8 text text_type_main-medium'>{item.name}</div>
                    <div className={`${styles.nutritions} text text_type_main-default`}>
                        <IngredientDetailsValue text='Калории, ккал' value={item.calories} />
                        <IngredientDetailsValue text='Белки, г' value={item.proteins} />
                        <IngredientDetailsValue text='Жиры, г' value={item.fat} />
                        <IngredientDetailsValue text='Углеводы, г' value={item.carbohydrates} />
                    </div>
                </>
            )}
        </div>
    );
}

export default IngredientDetails;