import axios from 'axios';

const url = 'https://sz.hktr.de/api';

export const login = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/auth/login`, userData);
    console.log(response.data);
    dispatch({
      type: 'LOGIN',
      userData: response.data,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const register = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/auth/register`, userData);
    console.log(response.data);
    dispatch({
      type: 'REGISTER',
      userData: response.data,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const logout = (userData) => async (dispatch) => {
  try {
    await axios.post(`${url}/auth/logout`, {
      refreshToken: userData,
    });

    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    console.log(error);
  }
};

export const unregister = (userId, userToken) => async (dispatch) => {
  try {
    await axios.delete(`${url}/user/${userId}`, { token: userToken });

    dispatch({ type: 'UNREGISTER' });
  } catch (error) {
    console.log(error);
  }
};
