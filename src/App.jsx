import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddPost from './Components/Posts/AddPost/AddPosts';
import Posts from './Components/Posts/ViewPost/Posts';
import { getPost } from './Redux/Action/postAction';
import Navigation from './Components/Container/Navigation/Navigation';
import AuthButton from './Components/Auth/AuthInfo/AuthButton';
import IfAuth from './ifAuth';
import UserProfile from './Components/Profile/UserProfile';
import MyProfile from './Components/Profile/MyProfile';
import Friends from './Components/Profile/Friends';

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
          <Route path='/post/add' component={AddPost} />
          <Route exact path='/nisa' component={Posts} />
          <Route path='/user/:id' component={UserProfile} />
          <Route path='/profile/:id' component={MyProfile} />
          <Route path='/:tab' component={MyProfile} />
          <Route path='/friends' component={Friends} />
        </Switch>
      </IfAuth>
    </div>
  );
}

export default App;
