import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GlobalHeader = ({ location: { pathname } }) => {
  return (
    <header className="gheader container">
      <div className="gheader__logo">
        <Link to="/">
          <img src="https://pngmafia.net/image/2019/01/3529520_0-min.png" alt="" />
        </Link>
      </div>
      <ul className="gheader__menu">
        <li className={`gheader__list ${pathname === '/about' ? 'gheader__list--active' : ''}`}>
          <Link to="/about">
            <span>ABOUT US</span>
          </Link>
        </li>
        <li className={`gheader__list ${pathname === '/study' ? 'gheader__list--active' : ''}`}>
          <Link to="/study">
            <span>STUDY</span>
          </Link>
        </li>
        <li className={`gheader__list ${pathname === '/course' ? 'gheader__list--active' : ''}`}>
          <Link to="/course">
            <span>COURSE</span>
          </Link>
        </li>
        <li className={`gheader__list ${pathname === '/contact' ? 'gheader__list--active' : ''}`}>
          <Link to="/contact">
            <span>CONTACT</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default withRouter(GlobalHeader);
