import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddPost from './Components/Posts/AddPost/AddPosts';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import Posts from './Components/Posts/Posts';
import { logout } from './Redux/Action/authAction';
import { getPost } from './Redux/Action/postAction';
import Editpost from './Components/Posts/EditPost/EditPost';
import Navigation from './Components/Container/Navigation/Navigation';
import AuthButton from './Components/Auth/AuthInfo/AuthButton';
import IfAuth from './ifAuth';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.refreshToken);
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div>
      <AuthButton />

      <IfAuth>
        <Navigation />

        <Switch>
          <Route path='/post/add'>
            <AddPost />
          </Route>

          <Route exact path='/nisa'>
            <Posts />
          </Route>
        </Switch>
      </IfAuth>

      {/* <button
        onClick={() => {
          dispatch(logout(state));
        }}
      >
        Logout
      </button> */}
      <h1>sami</h1>
    </div>
  );
}

export default App;
