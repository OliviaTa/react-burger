import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/burger-constructor';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

const reducer = (state, action) => {
  let changedIngredients = [...state.ingredients];

  switch (action.type) {
    case 'addItem':
      if (action.payload.type === 'bun') return { ...state, bun: action.payload };

      changedIngredients.push(action.payload);
      return { ...state, ingredients: changedIngredients };
    case 'removeItem':
      changedIngredients.splice(action.payload, 1);
      return { ...state, ingredients: changedIngredients };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <div className={`${styles.app} text text_type_main-default`}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
