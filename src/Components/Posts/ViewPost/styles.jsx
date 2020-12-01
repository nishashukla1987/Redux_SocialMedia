import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginBottom: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'blue',
  },
  rootGrid: {
    display: 'flex',
    //flexWrap: 'wrap',
    flexDirection: 'column',

    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '20px',
    backgroundColor: 'theme.palette.background.paper',
  },
}));
