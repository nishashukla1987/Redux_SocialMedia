const defaultState = {
  search: {},
  userData: [],
  userPosts: [],
};

const userReducer = (state = defaultState, action) => {
  const { list, model, field, match } = action;

  switch (action.type) {
    case 'SEARCH_RESULT':
      return { ...state, search: { list, model, field, match } };

    case 'SEARCH_CHANGE':
      return { ...state, search: { model, field, match } };

    case 'GET_USER':
      return { ...state, userData: action.userData };

    case 'GETUSER_POST':
      return { ...state, userPosts: action.userPosts };

    case 'ADDFRIEND':
      return { ...state };

    default:
      return state;
  }
};

export default userReducer;
