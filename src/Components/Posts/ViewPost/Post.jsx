import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  Hidden,
  IconButton,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCommentIcon from '@material-ui/icons/AddComment';
import {
  likePost,
  removePost,
  commentPost,
} from '../../../Redux/Action/postAction';
import Editpost from '../EditPost/EditPost';
import Comment from '../Comment/Comment';
import { useStyles } from './styles';

function Post({ post, index }) {
  const classes = useStyles();

  const [showEdit, setShowEdit] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  return (
    <>
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
            'Posted at ' + moment(post.createdAt).format('DD-MMM-YYYY hh:mm:ss')
            // subheader={'Posted  ' + moment(post.createdAt).fromNow()}
          }
        />

        <CardContent>
          <FormControl>
            <Typography variant='body2' color='textSecondary' component='p'>
              {post.message}
            </Typography>
          </FormControl>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              dispatch(likePost(post.id));
            }}
          >
            <ThumbUpAltIcon />
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

          <IconButton
            onClick={() => {
              // dispatch(commentPost(post.id));
              setShowComment(true);
              setSelected(index);
            }}
          >
            <AddCommentIcon />
          </IconButton>

          {showEdit && selected === index ? (
            <Editpost post={post} setSelected={setSelected} />
          ) : null}

          {showComment && selected === index ? (
            <Comment post={post} setSelected={setSelected} />
          ) : null}
        </CardActions>
      </Card>

      {post.comments.map((post, index) => (
        <Post post={post} key={post.id} index={index} />
      ))}
    </>
  );
}

export default Post;
