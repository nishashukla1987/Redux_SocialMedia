import { Container } from '@material-ui/core';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import Post from './Post';

function Posts() {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  // const [showEdit, setShowEdit] = useState(false);
  // const [showComment, setShowComment] = useState(false);

  // const [selected, setSelected] = useState(-1);
  // const dispatch = useDispatch();

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
