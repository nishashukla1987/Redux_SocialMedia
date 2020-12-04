import React, { useEffect } from 'react';

import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { paperTheme } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { PersonAdd } from '@material-ui/icons';
import { addFriend, getUser } from '../../Redux/Action/userAction';

const useStyles = makeStyles(paperTheme);
function User({ userId }) {
  const classes = useStyles();
  const post = useSelector((state) => state.post);

  const profiles = useSelector((state) => state.profiles);
  const user = profiles ? profiles[userId] : false;
  useEffect(() => getUser(userId), [userId]);
  return !user ? null : (
    <Paper className={classes.root}>
      <Grid container justify='left' alignItems='top'>
        <Grid item>
          <Avatar src={user.avatar} className={classes.large} />
        </Grid>
        <Grid item>
          <Typography variant='h1'>{user.name}</Typography>
        </Grid>
      </Grid>
      <IconButton onClick={() => addFriend(user.userId)}>
        <PersonAdd />
      </IconButton>
    </Paper>
  );
}

export default User;
