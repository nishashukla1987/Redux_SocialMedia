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
import Post from './Post';

function Posts() {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  const [showEdit, setShowEdit] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  return (
    <div>
      <Container className={classes.rootGrid}>
        {posts.postData.map((post, index) => (
          <Post post={post} key={post.id} index={index} />
        ))}
      </Container>
    </div>
  );
}

export default Posts;
