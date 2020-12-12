import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUserFriends } from '../../Redux/Action/userAction';

function UserFriends() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.userData);
  const users = useSelector((state) => state.users.users);
  useEffect(() => dispatch(getUserFriends(userData.friends)), []);

  return (
    <ul>
      {userData.friends.map((id) => {
        const user = users[id];

        if (!user) return `${id}`;
        return <li>{user.name}</li>;
      })}
    </ul>
  );
}

export default UserFriends;
