import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Auth() {
  return (
    <div>
      <Switch>
        <Route path='/auth/login'>
          <Login />
        </Route>

        <Route path='/auth/register'>
          <Register />
        </Route>

        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
}

export default Auth;
