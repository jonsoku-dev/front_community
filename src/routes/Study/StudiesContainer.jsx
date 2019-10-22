import React, { useEffect } from 'react';
import { getStudies } from '../../actions/study';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StudiesContainer = ({ getStudies }) => {
  useEffect(() => {
    getStudies();
  }, []);
  return <div></div>;
};

StudiesContainer.propTypes = {};

export default connect(
  null,
  { getStudies },
)(StudiesContainer);
