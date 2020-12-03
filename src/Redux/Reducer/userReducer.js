const defaultState = {
  search: {},
};

const userReducer = (state = defaultState, action) => {
  const { list, model, field, match } = action;

  switch (action.type) {
    case 'SEARCH_RESULT':
      return { ...state, search: { list, model, field, match } };

    case 'SEARCH_CHANGE':
      return { ...state, search: { model, field, match } };

    default:
      return state;
  }
};

export default userReducer;
