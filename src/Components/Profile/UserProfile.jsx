import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserPosts } from '../../Redux/Action/userAction';
//import Posts from '../Posts/ViewPost/Posts';

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
      <h1>{user.userData.name}</h1>
      <h2>{user.userData.email}</h2>
      {user.userPosts.map((post) => (
        <div>
          <h3>{post.message}</h3>
        </div>
      ))}
    </>
  );
}

export default UserProfile;
