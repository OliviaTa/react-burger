import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

const ProtectedRoute = ({ children, ...rest }) => {
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

ProtectedRoute.propTypes = {
    children: PropTypes.element,
    rest: PropTypes.object
};

export default ProtectedRoute;