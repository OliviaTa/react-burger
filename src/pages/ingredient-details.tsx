import { FC } from "react";
import IngredientDetails from "../components/modal/ingredient-details/ingredient-details";
import styles from "./home.module.css";

export const IngredientDetailsPage: FC = () => {
    return (
        <div className={`${styles.ingredientDetails} mt-30`}>
            <h1 className='text text_type_main-large'>Детали ингредиента</h1>
            <IngredientDetails />
        </div>
    );
}