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

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth.refreshToken);
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route path='/auth/login'>
          <Login />
        </Route>
        <Route path='/auth/register'>
          <Register />
        </Route>

        <Route path='/post/add'>
          <AddPost />
        </Route>

        <Route exact path='/'>
          <Posts />
        </Route>
      </Switch>

      <button
        onClick={() => {
          dispatch(logout(state));
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
