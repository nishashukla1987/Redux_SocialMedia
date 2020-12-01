import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AddPost from './Components/Posts/AddPost/AddPosts';
import Posts from './Components/Posts/Posts';
import { getPost } from './Redux/Action/postAction';
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
    </div>
  );
}

export default App;
