import React from 'react';
import data from '../../utils/data';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import styles from './app.module.css';

class App extends React.Component {
  state = {
    data: data.map(item => ({ ...item, count: 1 }))
  };

  render() {
    return (
      <div className={`${styles.app} text text_type_main-default`}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients data={this.state.data} />
          <BurgerConstructor data={this.state.data.filter(element => element.count > 0)} />
        </main>
      </div>
    );
  }
}

export default App;
