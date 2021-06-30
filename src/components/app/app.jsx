import React from 'react';
import burgersData from '../../utils/data';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

function App() {
  const data = burgersData.map(item => ({ ...item, count: 1 }));

  return (
    <div className={`${styles.app} text text_type_main-default`}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data.filter(element => element.count > 0)} />
      </main>
    </div>
  );
}

export default App;
