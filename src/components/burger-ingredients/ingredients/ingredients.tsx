import { FC, useMemo } from 'react';
import { useSelector } from '../../../services/hooks';
import { TBurgerConstructorItem, TTabItem } from '../../../types/app.types';
import IngredientsSection from './ingredients-section/ingredients-section';
import style from './ingredients.module.css';

interface IIngredientsProps {
    tabs: Array<TTabItem>;
    onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
};

const Ingredients: FC<IIngredientsProps> = ({ tabs, onScroll }) => {
    const burgersData = useSelector(state => state.burgerConstructor.ingredients);
    const { bun, ingredients } = useSelector(state => state.burgerConstructor.constructorIngredients);

    const burgersDataWithCount = useMemo<Array<TBurgerConstructorItem>>(() => {
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

export default Ingredients;