import { FC } from 'react';
import { useSelector } from "../services/hooks";
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
    const user = useSelector(state => state.auth.user);
    const cookie = getCookie('accessToken');

    if (!user && cookie) return null;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        ></Route>
    )
};

export default ProtectedRoute;