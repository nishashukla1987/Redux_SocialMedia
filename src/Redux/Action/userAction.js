import axios from 'axios';

const url = 'https://sz.hktr.de/api';

export const searchUser = (match, type = 'User', field = 'name') => async (
  dispatch
) => {
  try {
    const response = await axios.post(`${url}/search`, {
      match,
      type,
      field,
    });
    console.log(response.data);
    dispatch({
      type: 'SEARCH_RESULT',
      list: response.data,
      model: type,
      field,
      match,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/user/${userId}`);
    console.log(response.data);
    dispatch({
      type: 'GET_USER',
      userData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/user/posts/${userId}`);
    console.log(response.data);
    dispatch({
      type: 'GETUSER_POST',
      userPosts: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addFriend = (userId) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/friends/approve/${userId}`);
    console.log(response.data);
    dispatch({
      type: 'ADDFRIEND',
      userId,
      data: response.data,
    });
    await getUser(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const changeAvatar = (avatar) => async (dispatch) => {
  try {
    const response = await axios.patch(`${url}/user/`, { avatar });
    console.log(response.data);
    dispatch({
      type: 'AVATAR',

      userData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
