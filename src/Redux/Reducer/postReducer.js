const defaultState = {
  postData: [],
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POST':
      return {
        ...state,
        postData: action.postData,
      };

    case 'ADD_POST':
      return {
        ...state,
        postData: [action.postData, ...state.postData],
      };

    case 'EDIT_POST':
      return {
        ...state,
        postData: [action.postData, ...state.postData],
      };

    case 'REMOVE_POST':
      return state;

    default:
      return state;
  }
};

export default postReducer;
