import React, { useEffect } from 'react';
import Posts from '../Posts/ViewPost/Posts';
import { Route, useHistory, useParams } from 'react-router-dom';
import { Link, Switch, Tab, Tabs } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Friends from './Friends';
import AddPost from '../Posts/AddPost/AddPosts';
import User from './User';
import { getUser, getUserPosts } from '../../Redux/Action/userAction';

function MyProfile() {
  const { id } = useParams();
  const history = useHistory();
  const authorPost = useSelector((state) => state.users);
  const author = useSelector((state) => state.auth.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  return (
    <>
      <h1>{author.name}</h1>
      <h2>{author.email}</h2>
      {authorPost.userPosts.map((post) => (
        <div>
          <h3>{post.message}</h3>
        </div>
      ))}

      {/* <Tabs>
        <Tab label='Timeline' value='' />
        <Link to='/friends'>
          <Tab label='Friends' value='friends' />
        </Link>

        <Tab label='Messages' value='messages' />
      </Tabs> */}
      {/* <Switch>
         <Route path='/friends' component={Friends} />
        <Route path='/nisa' exact>
          <User id={user} />
          <AddPost />
          <Posts user={user} />
        </Route> 
      </Switch> */}
    </>
  );
}

export default MyProfile;
