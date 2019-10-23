import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

const GlobalAuth = ({ logout, location: { pathname }, auth: { isAuthenticated, user } }) => {
  return (
    <div className="gauth container">
      <ul className="gauth__menu">
        {isAuthenticated ? (
          <>
            <li className="gauth__list">
              <span className="gauth_username">{user && user.name}님 환영합니다.</span>
            </li>
            <li className="gauth__list">
              <Link to="/mypage">
                <span className="gauth__mypage">MYPAGE</span>
              </Link>
            </li>
            <li className="gauth__list">
              <span className="gauth__logout" onClick={() => logout()}>
                LOGOUT
              </span>
            </li>
          </>
        ) : (
          <>
            <li className="gauth__list">
              <Link to="/login">
                <span>LOGIN</span>
              </Link>
            </li>
            <li className="gauth__list">
              <Link to="/register">
                <span>REGISTER</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
GlobalAuth.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logout },
)(withRouter(GlobalAuth));
