const defaultState = {
  profileData: [],
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return {
        ...state,
        profileData: action.profileData,
      };

    case 'ADD_PROFILE':
      return {
        ...state,
        profileData: [action.profileData, ...state.profileData],
      };

    case 'EDIT_PROFILE':
      let newProfileData = [...state.profileData].map((post) =>
        post.id == action.profileData.id ? action.profileData : post
      );
      return {
        ...state,
        profileData: [action.profileData, ...state.profileData],
      };

    case 'REMOVE_PROFILE':
      return state;

    default:
      return state;
  }
};

export default profileReducer;
