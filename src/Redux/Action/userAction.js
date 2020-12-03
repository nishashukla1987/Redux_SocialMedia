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
    const response = await axios.get(`${URL}/user/${userId}`);
    console.log(response.data);
    dispatch({
      type: 'user:profile',
      userId,
      data: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
