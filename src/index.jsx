import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.scss';
// redux
import { Provider } from 'react-redux';
import store from './store';
// util
import setAuthToken from './util/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
