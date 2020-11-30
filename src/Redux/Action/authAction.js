import axios from 'axios';

const url = 'https://sz.hktr.de/api';

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/auth/login`, userData);
    console.log(response.data);
    dispatch({
      type: 'LOGIN',
      userData: response.data,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/auth/register`, userData);
    console.log(response.data);
    dispatch({
      type: 'REGISTER',
      userData: response.data,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
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
