import React, { useEffect } from 'react';
import { getStudies } from '../../actions/study';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StudiesContainer = ({ getStudies, study: { studies, loading }, auth: { user } }) => {
  useEffect(() => {
    getStudies();
  }, [getStudies]);
  const renderTop = () => user && user.role === 'admin' && <Link to="/study/create">Create</Link>;
  const renderMain = () => {
    return (
      !loading &&
      studies.map(st => (
        <Link className="study__link" to={`/study/${st._id}`} key={st._id}>
          <div className="study__card">
            <div className="study__name">{st.name}</div>
            <div className="study__desc">{st.description.substring(0, 50)}...</div>
            <div className="study__website">{st.website}</div>
          </div>
        </Link>
      ))
    );
  };
  return (
    <div className="study container">
      <div className="study__top">{renderTop()}</div>
      <div className="study__nav">left navigation</div>
      <div className="study__main">{renderMain()}</div>
    </div>
  );
};

StudiesContainer.propTypes = {
  getStudies: PropTypes.func.isRequired,
  study: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  study: state.study,
});

export default connect(
  mapStateToProps,
  { getStudies },
)(StudiesContainer);
