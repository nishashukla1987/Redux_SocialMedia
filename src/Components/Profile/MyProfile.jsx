import React, { useEffect } from 'react';
import Posts from '../Posts/ViewPost/Posts';
import { Route, useHistory, useParams } from 'react-router-dom';
import { Switch, Tab, Tabs } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Friends from './Friends';
import AddPost from '../Posts/AddPost/AddPosts';
import User from './User';
import { getUser, getUserPosts } from '../../Redux/Action/userAction';

function MyProfile() {
  const { id } = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  return (
    <>
      <Tabs>
        <Tab label='Timeline' value='' />
        <Tab label='Friends' value='friends' />
        <Tab label='Messages' value='messages' />
      </Tabs>
      <Switch>
        <Route path='/friends' component={Friends} />
        <Route path='/nisa' exact>
          <User id={user} />
          <AddPost />
          <Posts user={user} />
        </Route>
      </Switch>
    </>
  );
}

export default MyProfile;
