import React, { useReducer } from 'react';
import { ConstructorContext } from '../../utils/appContext';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

const constructorInitialState = { burgersData: [], totalPrice: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return { ...state, burgersData: action.payload };
    case 'addItem':
      if (action.payload.type === 'bun' && state.burgersData.filter(item => item.type === 'bun' && item.count > 0).length) return state;

      return {
        burgersData: state.burgersData.map(item => item._id === action.payload._id ? { ...item, count: item.count + 1 } : item),
        totalPrice: state.totalPrice + action.payload.price
      };
    case 'removeItem':
      if (action.payload.count === 0) return state;

      return {
        burgersData: state.burgersData.map(item => item._id === action.payload._id ? { ...item, count: item.count - 1 } : item),
        totalPrice: state.totalPrice - action.payload.price
      };
    case 'resetPrice':
      return { burgersData: state.burgersData, totalPrice: 0 };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};

function App() {
  const [constructorState, constructorDispatcher] = useReducer(reducer, constructorInitialState, undefined);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(INGREDIENTS_URL);

        if (res.ok) {
          const data = await res.json();
          constructorDispatcher({
            type: 'setData',
            payload: data.data.map(item => ({ ...item, count: 0 }))
          });
        } else {
          Promise.reject(`Ошибка ${res.status}`)
        }
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className={`${styles.app} text text_type_main-default`}>
      <AppHeader />
      <ConstructorContext.Provider value={{ constructorState, constructorDispatcher }}>
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </ConstructorContext.Provider>
    </div>
  );
}

export default App;
