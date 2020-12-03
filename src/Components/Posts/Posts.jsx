import { Hidden, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { removePost } from '../../Redux/Action/postAction';
import Editpost from './EditPost/EditPost';

function Posts() {
  const posts = useSelector((state) => state.posts);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();

  return (
    <div>
      {posts.postData.map((post, index) => {
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
      })}
    </div>
  );
  
}

export default Posts;
