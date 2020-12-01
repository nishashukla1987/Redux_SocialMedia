import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Auth() {
  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Redirect to='/login' />
      </Switch>
    </div>
  );
}

export default Auth;
