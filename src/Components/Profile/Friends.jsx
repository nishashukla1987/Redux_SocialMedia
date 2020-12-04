import React, { useEffect } from 'react';

import { Avatar, Table, TableCell, TableRow } from '@material-ui/core';

import { useSelector } from 'react-redux';

import { getUser } from '../../Redux/Action/userAction';

function Friends() {
  useEffect((e) => getUser(), []);

  const user = useSelector((state) => state.auth.user);

  return (
    <Table>
      {user.friends.map((friend) => (
        <TableRow key={friend.id}>
          <TableCell>
            <Avatar src={friend.avatar} />
          </TableCell>
          <TableCell>{friend.name}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default Friends;
