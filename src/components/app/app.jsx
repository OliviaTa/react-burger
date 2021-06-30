import React from 'react';
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
        const data = await res.json();
        setBurgersData(
          data.data.map(item => ({ ...item, count: 1 }))
        );
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className={`${styles.app} text text_type_main-default`}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={burgersData} />
        <BurgerConstructor data={burgersData.filter(element => element.count > 0)} />
      </main>
    </div>
  );
}

export default App;
