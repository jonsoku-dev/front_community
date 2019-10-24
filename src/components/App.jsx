import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
// react-redux
import { connect } from 'react-redux';
// import
import { loadUser } from '../actions/auth';
// Router
import AppRouter from '../routes/AppRouter';
// Global
import GlobalAlert from './layouts/GlobalAlert';
import GlobalAuth from './layouts/GlobalAuth';
import GlobalHeader from './layouts/GlobalHeader';

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <Router>
      <GlobalAlert />
      <GlobalAuth />
      <GlobalHeader />
      <AppRouter />
    </Router>
  );
};

App.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  { loadUser },
)(App);
