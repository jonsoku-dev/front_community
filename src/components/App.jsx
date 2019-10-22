import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../routes/AppRouter';
import GlobalHeader from './layouts/GlobalHeader';

// redux
import { Provider } from 'react-redux';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalHeader />
      <AppRouter />
    </Router>
  </Provider>
);

export default App;
