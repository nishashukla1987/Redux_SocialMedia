import {
  Button,
  Card,
  CardActions,
  CardHeader,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../../Redux/Action/postAction';

export default function Comment({ post, setSelected }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [commentPostMessage, setCommentPostMessage] = useState({
    message: '',
    id: post.id,
  });

  return (
    <Card className={classes.root} variant='outlined'>
      <CardHeader title='Comment Post' />
      <form noValidate>
        <div>
          <TextField
            id='outlined-multiline-static'
            label=' Comment Post '
            multiline
            rows={5}
            value={commentPostMessage.message}
            onChange={(e) =>
              setCommentPostMessage({
                ...commentPostMessage,
                message: e.target.value,
              })
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
              dispatch(commentPost(commentPostMessage));
              setSelected(-1);
            }}
          >
            SaveComment
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
