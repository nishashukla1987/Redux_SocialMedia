import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Paper,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import { postTheme } from './styles';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../Redux/Action/postAction';

export default function AddPost() {
  const classes = useStyles();
  const [postMessage, setPostMessage] = useState({ message: '' });
  const dispatch = useDispatch();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader title='Create Post' />
      <form noValidate>
        <div>
          <TextField
            id='outlined-multiline-static'
            label='Write Post Here'
            multiline
            rows={4}
            value={postMessage.message}
            onChange={(e) =>
              setPostMessage({ ...postMessage, message: e.target.value })
            }
            variant='outlined'
          />
        </div>
        <CardActions>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => {
              e.preventDefault();
              dispatch(addPost(postMessage));
            }}
          >
            <Link to='/nisa'>Post</Link>
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
