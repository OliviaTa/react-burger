import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import { getUser } from "../services/actions/auth";

const ProtectedRoute = ({ children, ...rest }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

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