import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInUser && loggedInUser.email ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default PrivateRoute;


// ({
//     if(loggedInUser && loggedInUser.isAdmin == true) {
//         <Redirect to={{ pathname: "/dashboard/service", state: { from: location } }} />
// } else if ({
// <Redirect to={{ pathname: "/dashboard/order", state: { from: location } }} />
// } else {
// <Redirect to={{ pathname: "/login", state: { from: location } }} />
// }
// })