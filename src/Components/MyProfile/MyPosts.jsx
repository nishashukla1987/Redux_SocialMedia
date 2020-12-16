import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserPosts } from '../../Redux/Action/userAction';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  Typography,
} from '@material-ui/core';

import { useStyles } from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function MyPosts() {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();

  const author = useSelector((state) => state.auth.userData.user);
  const authorPost = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const [state, setState] = useState({ images: [] });

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  return (
    <>
      {authorPost.userPosts.map((post) => (
        <div>
          <Card fullwidth className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar} src={author.avatar}></Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title={author.name}
              subheader={
                'Posted  ' +
                moment(post.createdAt).fromNow() +
                (post.createdAt != post.createdAt
                  ? ' (edited ' + moment(post.updatedAt).fromNow() + ')'
                  : '')
              }
            />

            <CardContent>
              <FormControl>
                <Typography variant='body2' color='inherit' component='p'>
                  <div>
                    {post.images.length ? (
                      <img
                        src={post.images}
                        alt=''
                        style={{
                          width: '200px',
                          height: '200px',
                          padding: '20px',
                        }}
                      />
                    ) : null}
                    <h4>{post.message}</h4>
                  </div>
                </Typography>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
}

export default MyPosts;
