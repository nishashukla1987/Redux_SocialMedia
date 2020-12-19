import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFriend,
  getUserFriends,
  unFriend,
} from '../../Redux/Action/userAction';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStyles } from '../MyProfile/styles';

function MyFriendsRequests() {
  const dispatch = useDispatch();
  const classes = useStyles();
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

              <IconButton onClick={() => dispatch(addFriend(id))}>
                <CheckCircleIcon />
              </IconButton>

              <IconButton
                className={classes.unFriendicon}
                onClick={() => dispatch(unFriend(id))}
              >
                <CancelIcon />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MyFriendsRequests;
