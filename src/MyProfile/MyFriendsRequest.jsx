import { Avatar } from '@material-ui/core';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFriend,
  getUserFriends,
  unFriend,
} from '../Redux/Action/userAction';

function MyFriendsRequests() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.userData);
  const users = useSelector((state) => state.users.users);
  useEffect(() => dispatch(getUserFriends(userData.friendRequests)), []);

  return (
    <>
      <ul>
        {userData.friendRequests.map((id) => {
          const user = users[id];
          if (!user) return `${id}`;
          return (
            <li>
              <Avatar src={user.avatar}></Avatar>
              {user.name}
              {/* <button onClick={() => dispatch(addFriend(id))}>
                Approve User
              </button>
              <button onClick={() => dispatch(unFriend(id))}>
                Reject User
              </button> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MyFriendsRequests;
