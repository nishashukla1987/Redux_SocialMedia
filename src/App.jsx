import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddPost from './Components/Posts/AddPost/AddPosts';
import Posts from './Components/Posts/ViewPost/Posts';
import { getPost } from './Redux/Action/postAction';
import Navigation from './Components/Container/Navigation/Navigation';
import CheckAuth from './Components/Auth/AuthInfo/CheckAuth';
import IfAuth from './Components/Auth/ifAuth';
import UserProfile from './Components/UserProfile/UserProfile';

import StatusSnackbar from './Components/Auth/AuthInfo/SnackbarStatus';
import MyProfileView from './MyProfile/MyProfileView';

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
          <Route path='/profile/:id' component={MyProfileView} />
        </Switch>
      </IfAuth>
    </div>
  );
}

export default App;
