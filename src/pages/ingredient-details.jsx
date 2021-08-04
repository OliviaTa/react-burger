import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../components/modal/ingredient-details/ingredient-details";
import { getIngredients } from "../services/actions/burger-constructor";
import styles from "./home.module.css";

export function IngredientDetailsPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const ingredients = useSelector(state => state.burgerConstructor.ingredients);
    const filteredIngredient = ingredients.filter(item => item._id === id);

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    if (!filteredIngredient.length) {
        return null;
    }

    return (
        <div className={`${styles.ingredientDetails} mt-30`}>
            <h1 className='text text_type_main-large'>Детали ингредиента</h1>
            <IngredientDetails item={filteredIngredient[0]} />
        </div>
    );
}