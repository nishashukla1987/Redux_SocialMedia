import axios from 'axios';

let defaultState = {
  userData: [],
  token: false,
  refreshToken: false,
};

const localStorageState = JSON.parse(localStorage.getItem('sample'));
if (localStorageState) {
  defaultState = localStorageState;
  if (defaultState.token)
    axios.defaults.headers.common['Authorization'] = defaultState.token;
}
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      axios.defaults.headers.common['Authorization'] = action.token;
      return {
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
      };

    case 'LOGOUT':
      delete axios.defaults.headers.common['Authorization'];
      return {
        userData: [],
        token: false,
        refreshToken: false,
      };

    case 'REGISTER':
      axios.defaults.headers.common['Authorization'] = action.token;
      return {
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
      };

    case 'UNREGISTER':
      localStorage.removeItem('sample');
      return {
        userData: [],
        token: false,
        refreshToken: false,
      };

    default:
      return state;
  }
};

export default authReducer;
