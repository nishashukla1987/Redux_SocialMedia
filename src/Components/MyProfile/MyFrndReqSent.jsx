import React, { useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFriend,
  getUserFriends,
  unFriend,
} from '../../Redux/Action/userAction';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStyles } from './styles';

function MyFrndReqSent() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userData = useSelector((state) => state.users.userData);
  const users = useSelector((state) => state.users.users);
  useEffect(() => dispatch(getUserFriends(userData.friendRequestsSent)), []);

  return (
    <>
      <ul>
        {userData.friendRequestsSent.map((id) => {
          const user = users[id];

          if (!user) return `${id}`;
          return (
            <li>
              <Avatar src={user.avatar}></Avatar>
              {user.name}

              <IconButton
                className={classes.pendindReq}
                onClick={() => dispatch(addFriend(id))}
              >
                pending
              </IconButton>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MyFrndReqSent;
