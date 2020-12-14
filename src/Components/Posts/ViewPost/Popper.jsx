import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { deleteReaction, likePost } from '../../../Redux/Action/postAction';
import { useStyles } from './styles';
import { IconButton } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Popper({ post, index }) {
  const classes = useStyles();

  const classes = useStyles();
  const user = useSelector((state) => state.users);
  const author = useSelector((state) => state.auth.userData.user);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();

  const IconForReaction = {
    Like: <AiFillLike />,
    Hate: <AiFillDislike />,
    Love: <AiFillHeart />,
    Angry: <FaAngry />,
    Frown: <AiFillFrown />,
    Rofl: <FaRegGrinSquintTears />,
    Lol: <FaRegLaughSquint />,
  };

  //const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    reaction: {
      Like: post.yourReactions.Like || false,
      Hate: post.yourReactions.Hate || false,
      Frown: post.yourReactions.Frown || false,
      Angry: post.yourReactions.Angry || false,
      Lol: post.yourReactions.LOl || false,
      Love: post.yourReactions.Love || false,
      Rofl: post.yourReactions.Rolf || false,
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  //const id = open ? 'simple-popper' : undefined;

  return (
    <>
      {/* <IconButton onClick={handleClick}>
        <ThumbUpAltIcon />
      </IconButton> */}

      <Popper id={post.id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
          {Object.keys(IconForReaction).map((reaction) => (
            <button
              className={post.yourReactions[reaction] ? classes.like : ''}
              key={reaction}
              onClick={(e) => {
                post.yourReactions[reaction]
                  ? dispatch(deleteReaction(post.id, reaction))
                  : dispatch(likePost(post.id, reaction));
              }}
            >
              {IconForReaction[reaction]}
            </button>
          ))}
        </div>
      </Popper>
    </>
  );
}
