import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUserFriends, unFriend } from '../../Redux/Action/userAction';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MyFriendsRequests from './MyFriendsRequests';
import { useStyles } from './styles';
import MyFrndReqSent from './MyFrndReqSent';

function MyFriends() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.userData);

  const users = useSelector((state) => state.users.users);

  useEffect(() => dispatch(getUserFriends(userData.friends)), []);

  return (
    <>
      <ul>
        {userData.friends.map((id) => {
          const user = users[id];
          if (!user) return `${id}`;
          return (
            <li>
              <Avatar src={user.avatar}></Avatar>
              {user.name}

              <IconButton
                className={classes.unFriendicon}
                onClick={() => dispatch(unFriend(id))}
              >
                {/* <CancelIcon /> */}
                UnFriend
              </IconButton>
            </li>
          );
        })}

        <MyFriendsRequests />

        <MyFrndReqSent />
      </ul>
    </>
  );
}

export default MyFriends;
