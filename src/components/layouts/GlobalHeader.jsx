import React from 'react';
import { Link } from 'react-router-dom';

const GlobalHeader = props => {
  return (
    <header className="gheader container">
      <div className="gheader__logo">
        <img src="http://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG28.png" alt="" />
      </div>
      <ul className="gheader__menu">
        <li className="gheader__list">
          <Link to="/">
            <span>HOME</span>
          </Link>
        </li>
        <li className="gheader__list">
          <Link to="/about">
            <span>ABOUT US</span>
          </Link>
        </li>
        <li className="gheader__list">
          <Link to="/study">
            <span>STUDY</span>
          </Link>
        </li>
        <Link className="gheader__list">
          <Link to="/contact">
            <span>CONTACT</span>
          </Link>
        </Link>
      </ul>
    </header>
  );
};

export default GlobalHeader;
