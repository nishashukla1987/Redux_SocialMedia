import { combineReducers } from 'redux';
import authReducer from './Reducer/authReducer';
import postReducer from './Reducer/postReducer';
import userReducer from './Reducer/userReducer';
import profileReducer from './Reducer/profileReducer';

export default combineReducers({
  auth: authReducer,
  posts: postReducer,
  users: userReducer,
  profile: profileReducer,
});
