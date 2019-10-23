import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../routes/AppRouter';
import GlobalHeader from './layouts/GlobalHeader';
import GlobalAlert from './layouts/GlobalAlert';
import setAuthToken from '../util/setAuthToken';
import { loadUser } from '../actions/auth';

// redux
import { Provider } from 'react-redux';
import store from '../store';
import GlobalAuth from './layouts/GlobalAuth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <GlobalAlert />
        <GlobalAuth />
        <GlobalHeader />
        <AppRouter />
      </Router>
    </Provider>
  );
};

export default App;
