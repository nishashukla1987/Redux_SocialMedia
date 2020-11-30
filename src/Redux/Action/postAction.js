import axios from 'axios';

const url = 'https://sz.hktr.de/api';

export const getPost = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/post`);
    console.log(response.data);
    dispatch({
      type: 'GET_POST',
      postData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (postData) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/post`, postData);
    console.log(response.data);
    dispatch({
      type: 'ADD_POST',
      postData: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (postData) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/post`, postData);
    console.log(response.data);
    dispatch({
      type: 'EDIT_POST',
      postData: response.data,
    });
    await getPost()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const removePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${url}/post/${postId}`);

    dispatch({
      type: 'REMOVE_POST',
    });
    await getPost()(dispatch);
  } catch (error) {
    console.log(error);
  }
};