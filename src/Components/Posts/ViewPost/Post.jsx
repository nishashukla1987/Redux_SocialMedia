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
  Popper,
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
//import { FaAngry, AiOutlineFrown } from '@react-icons/all-files/fa/FaBeer';
import { FaFrown } from 'react-icons/fa';
import {
  AiFillLike,
  AiFillDislike,
  AiFillHeart,
  AiFillFrown,
} from 'react-icons/ai';
import {
  likePost,
  removePost,
  commentPost,
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

  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

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
            //'Posted at ' + moment(post.createdAt).format('DD-MMM-YYYY hh:mm:ss')
            'Posted  ' + moment(post.createdAt).fromNow()
          }
        />

        <CardContent>
          <FormControl>
            <Typography variant='body2' color='textSecondary' component='p'>
              <img
                src={post.images || null}
                alt=''
                style={{
                  width: '200px',
                  height: '200px',
                  padding: '20px',
                }}
              />

              {post.message}
            </Typography>
          </FormControl>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            onClick={(e) => {
              setOpen(true);
              setAnchor(e.target);
            }}
          >
            <ThumbUpAltIcon />
          </IconButton>

          <Popper id={post.id} open={open} anchorEl={anchor}>
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
