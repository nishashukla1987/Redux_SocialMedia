import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  Popper,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCommentIcon from '@material-ui/icons/AddComment';

import {
  AiFillLike,
  AiFillDislike,
  AiFillHeart,
  AiFillFrown,
} from 'react-icons/ai';
import {
  likePost,
  removePost,
  deleteReaction,
} from '../../../Redux/Action/postAction';
import Comment from '../Comment/Comment';
import Editpost from '../EditPost/EditPost';
import { useStyles } from './styles';

import {
  FaRegGrinSquintTears,
  FaAngry,
  FaRegLaughSquint,
} from 'react-icons/fa';

function Post({ post, index }) {
  const classes = useStyles();
  const user = useSelector((state) => state.users);
  const author = useSelector((state) => state.auth.userData.user);

  const [showEdit, setShowEdit] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [images, setImages] = useState({ images: [] });
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  const IconForReaction = {
    Like: <AiFillLike />,
    Hate: <AiFillDislike />,
    Love: <AiFillHeart />,
    Angry: <FaAngry />,
    Frown: <AiFillFrown />,
    Rofl: <FaRegGrinSquintTears />,
    Lol: <FaRegLaughSquint />,
  };

  //const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    reaction: {
      Like: post.yourReactions.Like || false,
      Hate: post.yourReactions.Hate || false,
      Frown: post.yourReactions.Frown || false,
      Angry: post.yourReactions.Angry || false,
      Lol: post.yourReactions.LOl || false,
      Love: post.yourReactions.Love || false,
      Rofl: post.yourReactions.Rolf || false,
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <>
      <Card key={index} fullwidth className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} src={author.avatar}></Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.author.name}
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
              {post.images.length ? (
                <img
                  src={post.images || null}
                  alt=''
                  style={{
                    width: '200px',
                    height: '200px',
                    padding: '20px',
                  }}
                />
              ) : null}

              <h4>{post.message}</h4>
            </Typography>
          </FormControl>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton onClick={handleClick}>
            <ThumbUpAltIcon />
          </IconButton>

          <Popper id={post.id} open={open} anchorEl={anchorEl}>
            <div className={classes.paper}>
              {Object.keys(IconForReaction).map((reaction) => (
                <button
                  className={post.yourReactions[reaction] ? classes.like : ''}
                  key={reaction}
                  onClick={(e) => {
                    post.yourReactions[reaction]
                      ? dispatch(deleteReaction(post.id, reaction))
                      : dispatch(likePost(post.id, reaction));
                  }}
                >
                  {IconForReaction[reaction]}
                </button>
              ))}
            </div>
          </Popper>

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

      {/* {post.comments.map((post, index) => (
        <Post post={post} key={post.id} index={index} />
      ))} */}
    </>
  );
}

export default Post;
