import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ForgotPasswordPage, HomePage, IngredientDetailsPage, LoginPage, ProfilePage, RegistertPage, ResetPasswordPage } from '../../pages';
import { getIngredients } from '../../services/actions/burger-constructor';
import AppHeader from '../app-header/app-header';
import ProtectedRoute from '../protected-route';
import styles from './app.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);

  return (
    <Router>
      <div className={`${styles.app} text text_type_main-default`}>
        <AppHeader />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegistertPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password">
            <ResetPasswordPage />
          </Route>
          <ProtectedRoute path="/profile">
            <ProfilePage />
          </ProtectedRoute>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path={`/ingredients/:id`}>
            <IngredientDetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
