import React, { useState, useEffect } from 'react';
import { getStudies } from '../../actions/study';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StudiesContainer = ({ getStudies, study: { studies, loading }, auth: { user } }) => {
  useEffect(() => {
    getStudies();
  }, [getStudies]);
  const [checked, setChecked] = useState([]);
  const handleToggle = e => {
    const { name } = e.target;
    let currentNameIndex = checked.indexOf(name);
    let newNameArr = [...checked];
    if (currentNameIndex === -1) {
      newNameArr.push(name);
    } else {
      newNameArr.splice(currentNameIndex, 1);
    }
    setChecked(newNameArr);
  };
  console.log(checked);
  const renderTop = () => user && user.role === 'admin' && <Link to="/study/create">Create</Link>;
  const renderLeftNav = () => (
    <div>
      <li>
        <input onChange={e => handleToggle(e)} type="checkbox" value="v1" name="v1" id="v1" />
        <label htmlFor="v1">value1</label>
      </li>
      <li>
        <input onChange={e => handleToggle(e)} type="checkbox" value="v2" name="v2" id="v2" />
        <label htmlFor="v2">value2</label>
      </li>
      <li>
        <input onChange={e => handleToggle(e)} type="checkbox" value="v3" name="v3" id="v3" />
        <label htmlFor="v3">value3</label>
      </li>
    </div>
  );
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
      <div className="study__nav">{renderLeftNav()}</div>
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
