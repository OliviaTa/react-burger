import { Location } from 'history';
import React, { FC, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { FeedPage, ForgotPasswordPage, HomePage, IngredientDetailsPage, LoginPage, OrderInfoPage, ProfilePage, RegistertPage, ResetPasswordPage } from '../../pages';
import { WS_CONNECTION_START } from '../../services/actions/allOrders';
import { getUser } from '../../services/actions/auth';
import { getIngredients } from '../../services/actions/burger-constructor';
import { WS_USER_ORDERS_CONNECTION_START } from '../../services/actions/userOrders';
import { useDispatch, useSelector } from '../../services/hooks';
import AppHeader from '../app-header/app-header';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderInfo from '../order-info/order-info';
import ProtectedRoute from '../protected-route';
import styles from './app.module.css';

interface ILocationState {
  background: Location;
  orderNumber: string;
}

const App: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<ILocationState>();
  const background = history.action === 'POP'
    ? null
    : location.state && location.state.background;
  const orderNumber = location.state && location.state.orderNumber
    ? location.state.orderNumber
    : 0;

  useEffect(() => {
    dispatch(getIngredients());
    dispatch({ type: WS_CONNECTION_START });
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector(state => state.auth.user);
  const wsConnected = useSelector(state => state.userOrders.wsConnected);

  useEffect(() => {
    if (user && !wsConnected) {
      dispatch({ type: WS_USER_ORDERS_CONNECTION_START });
    }
  }, [user, dispatch]);

  const modalOrderInfo = (<Modal
    onClose={() => history.push(background ? background.pathname : '/', {})}
    header={`#${orderNumber}`}
    headerClassName='text text_type_digits-default'
  >
    <OrderInfo />
  </Modal>);

  return (
    <div className={`${styles.app} text text_type_main-default`}>
      <AppHeader />
      <Switch location={background || location}>
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
        <ProtectedRoute path='/profile/orders/:id'>
          <OrderInfoPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/feed" exact={true}>
          <FeedPage />
        </Route>
        <Route path={`/ingredients/:id`}>
          <IngredientDetailsPage />
        </Route>
        <Route path='/feed/:id'>
          <OrderInfoPage />
        </Route>
      </Switch>

      {background && history.action === 'PUSH' &&
        <Switch>
          <Route path="/ingredients/:id">
            <Modal
              header='Детали ингредиента'
              onClose={() => history.push(background.pathname, {})}
            >
              <IngredientDetails />
            </Modal>
          </Route>
          <ProtectedRoute path="/profile/orders/:id">
            {modalOrderInfo}
          </ProtectedRoute>
          <Route path="/feed/:id">
            {modalOrderInfo}
          </Route>
        </Switch>
      }
    </div>
  );
}

export default App;
