import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserPosts } from '../../Redux/Action/userAction';
import Posts from '../Posts/ViewPost/Posts';

function UserProfile() {
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
      {user.userData.name}
      {user.userPosts.map((post) => (
        <div>
          <h1>{post.id}</h1>
          <h1>{post.message}</h1>
        </div>
      ))}
    </>
  );
}

export default UserProfile;
