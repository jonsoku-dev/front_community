import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GlobalAlert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => {
    console.log(alert);
    return (
      <div key={alert.id} className={`alert alert--${alert.alertType}`}>
        {alert.msg}
      </div>
    );
  });

GlobalAlert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(
  mapStateToProps,
  {},
)(GlobalAlert);
