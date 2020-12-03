import axios from 'axios';

const url = 'https://sz.hktr.de/api';

export const editProfile = (postData) => async (dispatch) => {
  console.log(postData);
  try {
    const response = await axios.patch(`${url}/profile/${postData.id}`, {});
    console.log(response.data);
    dispatch({
      type: 'PUT',
      postData: response.data,
    });
    await getProfile()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const viewProfile = (postId) => async (dispatch) => {
  try {
    await axios.view(`${url}/profile/${userId}`);

    dispatch({
      type: 'GET',
    });
    await getPost()(dispatch);
  } catch (error) {
    console.log(error);
  }
};
