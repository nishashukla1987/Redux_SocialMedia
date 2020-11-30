import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import Root from './Redux/Root';
import axios from 'axios';

const composeWithDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  Root,
  composeWithDevTool(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem('sample', JSON.stringify(store.getState().auth));
});

(function () {
  const token = store.getState().auth.token;
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
})();
