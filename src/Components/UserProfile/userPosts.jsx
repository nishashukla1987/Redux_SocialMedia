import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUser,
  getUserPosts,
  getUserPostsOnly,
} from '../../Redux/Action/userAction';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  Typography,
} from '@material-ui/core';

import { useStyles } from '../Posts/ViewPost/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Post from '../Posts/ViewPost/Post';

function UserPosts() {
  const classes = useStyles();

  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPostsOnly(id));
  }, [dispatch, id]);

  console.log(user.userPosts);

  return (
    <>
      {user.userPosts.map((post, index) => (
        <Post post={post} key={post.id} index={index} />
      ))}
    </>
  );
}

export default UserPosts;
