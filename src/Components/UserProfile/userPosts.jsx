import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  console.log(user.userPosts);

  return (
    <>
      {user.userPosts.map((post, index) => (
        <Post post={post} key={post.id} index={index} />
        // <div>
        //   <Card fullwidth className={classes.root}>
        //     <CardHeader
        //       avatar={
        //         <Avatar
        //           className={classes.avatar}
        //           src={user.userData.avatar}
        //         ></Avatar>
        //       }
        //       action={
        //         <IconButton aria-label='settings'>
        //           <MoreVertIcon />
        //         </IconButton>
        //       }
        //       title={user.userData.name}
        //       subheader={
        //         'Posted  ' +
        //         moment(post.createdAt).fromNow() +
        //         (post.createdAt != post.createdAt
        //           ? ' (edited ' + moment(post.updatedAt).fromNow() + ')'
        //           : '')
        //       }
        //     />

        //     <CardContent>
        //       <FormControl>
        //         <Typography variant='body2' color='inherit' component='p'>
        //           <h3>{post.message}</h3>
        //         </Typography>
        //       </FormControl>
        //     </CardContent>
        //   </Card>
        // </div>
      ))}
    </>
  );
}

export default UserPosts;

// import {
//   Avatar,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Container,
//   FormControl,
//   Hidden,
//   IconButton,
//   Popper,
//   Typography,
// } from '@material-ui/core';
// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import AddCommentIcon from '@material-ui/icons/AddComment';
// //import { FaAngry, AiOutlineFrown } from '@react-icons/all-files/fa/FaBeer';
// import { FaFrown } from 'react-icons/fa';
// import {
//   AiFillLike,
//   AiFillDislike,
//   AiFillHeart,
//   AiFillFrown,
// } from 'react-icons/ai';
// // import {
// //   likePost,
// //   removePost,
// //   deleteReaction,
// // } from '';
// import Comment from '../Posts/Comment/Comment';
// import Editpost from '../Posts/EditPost/EditPost';
// import { useStyles } from '../Posts/ViewPost/styles';

// import {
//   FaRegGrinSquintTears,
//   FaAngry,
//   FaRegLaughSquint,
// } from 'react-icons/fa';
// import {
//   deleteReaction,
//   likePost,
//   removePost,
// } from '../../Redux/Action/postAction';
// import { useParams } from 'react-router-dom';
// import { getUser, getUserPosts } from '../../Redux/Action/userAction';

// function Post({ index, post }) {
//   const classes = useStyles();

//   const { id } = useParams();
//   console.log(id);

//   const user = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getUser(id));
//     dispatch(getUserPosts(id));
//   }, [dispatch, id]);

//   console.log(user.userPosts);

//   const [showEdit, setShowEdit] = useState(false);
//   const [showComment, setShowComment] = useState(false);
//   const [images, setImages] = useState({ images: [] });
//   const [selected, setSelected] = useState(-1);

//   const IconForReaction = {
//     Like: <AiFillLike />,
//     Hate: <AiFillDislike />,
//     Love: <AiFillHeart />,
//     Angry: <FaAngry />,
//     Frown: <AiFillFrown />,
//     Rofl: <FaRegGrinSquintTears />,
//     Lol: <FaRegLaughSquint />,
//   };

//   // const [state, setState] = useState({
//   //   reaction: {
//   //     Like: user.userPosts.yourReactions.Like || false,
//   //     Hate: user.userPosts.yourReactions.Hate || false,
//   //     Frown: user.userPosts.yourReactions.Frown || false,
//   //     Angry: user.userPosts.yourReactions.Angry || false,
//   //     Lol: user.userPosts.yourReactions.LOl || false,
//   //     Love: user.userPosts.yourReactions.Love || false,
//   //     Rofl: user.userPosts.yourReactions.Rolf || false,
//   //   },
//   // });

//   const [open, setOpen] = useState(false);
//   const [anchor, setAnchor] = useState(null);

//   return (
//     <>

//       <Card key={index} fullwidth className={classes.root}>
// {user.userPosts.map((post) => (

//         <CardHeader
//           avatar={<Avatar className={classes.avatar}>N</Avatar>}
//           action={
//             <IconButton aria-label='settings'>
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={user.userData.name}
//           subheader={
//             'Posted  ' +
//             moment(post.createdAt).fromNow() +
//             (post.createdAt != post.createdAt
//               ? ' (edited ' + moment(post.updatedAt).fromNow() + ')'
//               : '')
//           }
//         />

//         <CardContent>
//           <FormControl>
//             <Typography variant='body2' color='textSecondary' component='p'>
//               {post.images.length ? (
//                 <img
//                   src={post.images || null}
//                   alt=''
//                   style={{
//                     width: '200px',
//                     height: '200px',
//                     padding: '20px',
//                   }}
//                 />
//               ) : null}

//               {post.message}
//             </Typography>
//           </FormControl>
//         </CardContent>

//         <CardActions disableSpacing>
//           <IconButton
//             onClick={(e) => {
//               setOpen(true);
//               setAnchor(e.target);
//             }}
//           >
//             <ThumbUpAltIcon />
//           </IconButton>
//           {/*
//           <Popper id={post.id} open={open} anchorEl={anchor}>
//             <div className={classes.paper}>
//               {Object.keys(IconForReaction).map((reaction) => (
//                 <button
//                   className={post.yourReactions[reaction] ? classes.like : ''}
//                   key={reaction}
//                   onClick={(e) => {
//                     post.yourReactions[reaction]
//                       ? dispatch(deleteReaction(post.id, reaction))
//                       : dispatch(likePost(post.id, reaction));
//                   }}
//                 >
//                   {IconForReaction[reaction]}
//                 </button>
//               ))}
//             </div>
//           </Popper> */}

//           <IconButton aria-label='share'>
//             <ShareIcon />
//           </IconButton>

//           <IconButton
//             onClick={() => {
//               dispatch(removePost(post.id));
//             }}
//           >
//             <DeleteIcon />
//           </IconButton>

//           <IconButton
//             onClick={() => {
//               setShowEdit(true);
//               setSelected(index);
//             }}
//           >
//             <EditIcon />
//           </IconButton>

//           <IconButton
//             onClick={() => {
//               setShowComment(true);
//               setSelected(index);
//             }}
//           >
//             <AddCommentIcon />
//           </IconButton>

//           {showEdit && selected === index ? (
//             <Editpost post={post} setSelected={setSelected} />
//           ) : null}

//           {showComment && selected === index ? (
//             <Comment post={post} setSelected={setSelected} />
//           ) : null}
//         </CardActions>
//         )
//       </Card>

//       {post.comments.map((post, index) => (
//         <Post post={post} key={post.id} index={index} />
//       ))}
//       </>
//       );
// }

// export default Post;
