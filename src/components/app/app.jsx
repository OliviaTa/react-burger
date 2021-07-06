import React from 'react';
import { BurgersDataContext } from '../../utils/appContext';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {

  const [burgersData, setBurgersData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(INGREDIENTS_URL);

        if (res.ok) {
          const data = await res.json();
          setBurgersData(
            data.data.map(item => ({ ...item, count: 0 }))
          );
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
      <BurgersDataContext.Provider value={{ burgersData }}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </BurgersDataContext.Provider>
    </div>
  );
}

export default App;
