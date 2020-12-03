import { combineReducers } from 'redux';
import authReducer from './Reducer/authReducer';
import postReducer from './Reducer/postReducer';

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  users: userReducer,
});
