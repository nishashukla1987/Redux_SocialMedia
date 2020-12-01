import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Hidden,
  IconButton,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { removePost } from '../../../Redux/Action/postAction';
import Editpost from '../EditPost/EditPost';
import { useStyles } from './styles';

function Posts() {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  return (
    <div>
      {/* {posts.postData.map((post, index) => {
        return (
          <div key={index}>
            <h1>{post.message}</h1>

            <IconButton
              onClick={() => {
                dispatch(removePost(post.id));
              }}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              onClick={() => {
                setShowEdit(true);
                setSelected(index);
              }}
            >
              <EditIcon />
            </IconButton>

            {showEdit && selected === index ? (
              <Editpost post={post} setSelected={setSelected} />
            ) : null}
          </div>
        );
      })} */}

      <Container className={classes.rootGrid}>
        {posts.postData.map((post, index) => {
          return (
            <Card key={index} fullwidth className={classes.root}>
              <CardHeader
                avatar={<Avatar className={classes.avatar}>N</Avatar>}
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.author.name}
                subheader={
                  'Posted at ' +
                  moment(post.createdAt).format('DD-MMM-YYYY hh:mm:ss')
                  // subheader={'Posted at ' + moment(post.createdAt).fromNow()}
                }
              />

              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {post.message}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>

                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>

                <IconButton
                  onClick={() => {
                    dispatch(removePost(post.id));
                  }}
                >
                  <DeleteIcon />
                </IconButton>

                <IconButton
                  onClick={() => {
                    setShowEdit(true);
                    setSelected(index);
                  }}
                >
                  <EditIcon />
                </IconButton>

                {showEdit && selected === index ? (
                  <Editpost post={post} setSelected={setSelected} />
                ) : null}
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default Posts;
