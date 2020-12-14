import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFriend,
  getUser,
  getUserPosts,
} from '../../Redux/Action/userAction';
import { AppBar, Avatar, Tab, Tabs } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
//import Posts from '../Posts/ViewPost/Posts';

function UserInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  console.log(user.userPosts);

  return (
    <>
      <Avatar
        src={user.userData.avatar}
        style={{
          width: '150px',
          height: '150px',
          padding: '20px',
        }}
      />
      <h1>{user.userData.name}</h1>
      <h2>{user.userData.email}</h2>
      <button onClick={() => dispatch(addFriend(user.userData.id))}>
        Add User
      </button>
    </>
  );
}

export default UserInfo;
