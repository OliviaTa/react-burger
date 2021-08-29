import { FC } from 'react';
import { TBurgerConstructorItem } from '../../../../types/app.types';
import IngredientItem from './ingredient-item/ingredient-item';
import styles from './ingredients-section.module.css';

interface IIngredientsSectionProps {
    title: string;
    id: string;
    items: Array<TBurgerConstructorItem>
};

const IngredientsSection: FC<IIngredientsSectionProps> = ({ title, id, items }) => {
    return (
        <section id={id}>
            <h2 className='text_type_main-medium mb-6'>{title}</h2>
            <div className={`${styles.ingredients} pl-4 pr-4 pb-10`}>
                {
                    items.map(item => {
                        return (
                            <IngredientItem
                                item={item}
                                key={item._id}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default IngredientsSection;