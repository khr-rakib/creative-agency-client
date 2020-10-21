import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/login/PrivateRoute';
import { createContext } from 'react';
import CustomerOrder from './components/dashboard/customer/CustomerOrder';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <div className="root__app">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BrowserRouter>
          <Switch>


            <Route path="/dashboard/order:title" component={CustomerOrder} />

            <PrivateRoute path="/dashboard" >
              <Dashboard />
            </PrivateRoute>

            <Route path='/login' component={Login} />

            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
