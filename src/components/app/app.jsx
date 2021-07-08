import React, { useMemo, useReducer, useState } from 'react';
import { BurgersDataContext, ConstructorContext } from '../../utils/appContext';
import { getIngredients } from '../../utils/api';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

const constructorInitialState = { bun: null, ingredients: [] };

const reducer = (state, action) => {
  let changedIngredients = [...state.ingredients];

  switch (action.type) {
    case 'addItem':
      if (action.payload.type === 'bun') return { ...state, bun: action.payload };

      changedIngredients.push(action.payload);
      return { ...state, ingredients: changedIngredients };
    case 'removeItem':
      if (action.payload.type === 'bun') return { ...state, bun: null };

      changedIngredients.splice(action.payload, 1);
      return { ...state, ingredients: changedIngredients };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};

function App() {

  const [constructorState, constructorDispatcher] = useReducer(reducer, constructorInitialState, undefined);
  const constructorValue = useMemo(() => ({
    constructorState, constructorDispatcher
  }), [constructorState, constructorDispatcher]);

  const [burgersData, setBurgersData] = useState([]);
  const burgersDataValue = useMemo(() => ({ burgersData }), [burgersData]);

  React.useEffect(() => {
    getIngredients()
      .then(data => {
        setBurgersData(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`${styles.app} text text_type_main-default`}>
      <AppHeader />
      <ConstructorContext.Provider value={constructorValue}>
        <main className={styles.main}>
          <BurgersDataContext.Provider value={burgersDataValue}>
            <BurgerIngredients />
          </BurgersDataContext.Provider>
          <BurgerConstructor />
        </main>
      </ConstructorContext.Provider>
    </div>
  );
}

export default App;
