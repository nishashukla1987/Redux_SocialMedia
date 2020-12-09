import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddPost from './Components/Posts/AddPost/AddPosts';
import Posts from './Components/Posts/ViewPost/Posts';
import { getPost } from './Redux/Action/postAction';
import Navigation from './Components/Container/Navigation/Navigation';
import CheckAuth from './Components/Auth/AuthInfo/CheckAuth';
import IfAuth from './ifAuth';
import UserProfile from './Components/Profile/UserProfile';
import MyProfile from './Components/Profile/MyProfile';
import StatusSnackbar from './Components/Auth/AuthInfo/SnackbarStatus';

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.auth.refreshToken);
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <div>
      <CheckAuth />
      <StatusSnackbar />
      <IfAuth>
        <Navigation />

        <Switch>
          <Route path='/post/add' component={AddPost} />
          <Route exact path='/nisa' component={Posts} />
          <Route path='/user/:id' component={UserProfile} />
          <Route path='/profile/:id' component={MyProfile} />
        </Switch>
      </IfAuth>
    </div>
  );
}

export default App;
