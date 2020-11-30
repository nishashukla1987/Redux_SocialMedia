let defaultState = {
  userData: [],
  token: false,
  refreshToken: false,
};

const localStorageState = JSON.parse(localStorage.getItem('sample'));
if (localStorageState) defaultState = localStorageState;

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
      };

    case 'LOGOUT':
      localStorage.removeItem('sample');
      return {
        userData: [],
        token: false,
        refreshToken: false,
      };

    case 'REGISTER':
      return {
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
      };

    default:
      return state;
  }
};

export default authReducer;
