import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import IngredientDetails from "../components/modal/ingredient-details/ingredient-details";
import styles from "./home.module.css";

export function IngredientDetailsPage() {
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

    return (
        <div className={`${styles.ingredientDetails} mt-30`}>
            {ingredientsFailed ? (
                <h1 className='text text_type_main-large'>Мы не смогли найти ваш ингредиент :(</h1>
            ) : (
                <>
                    <h1 className='text text_type_main-large'>Детали ингредиента</h1>
                    <IngredientDetails item={filteredIngredient[0]} />
                </>
            )}
        </div>
    );
}