import React from 'react';
import data from '../../utils/data';
import AppHeader from '../app-header/AppHeader';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: data.map(item => ({ ...item, count: 1 }))
  };

  render() {
    return (
      <div className={`${styles.app} text text_type_main-default`}>
        <AppHeader />
        <main className={styles.main}>
          <div className='mr-10'>
            <BurgerIngredients data={this.state.data} />
          </div>
          <BurgerConstructor data={this.state.data.filter(element => element.count > 0)} />
        </main>
      </div>
    );
  }
}

export default App;
