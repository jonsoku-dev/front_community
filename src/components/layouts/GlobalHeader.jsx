import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GlobalHeader = ({ location: { pathname } }) => {
  // 순서대로
  const menuList = ['about', 'study', 'course', 'contact'];
  const renderMenu = () =>
    menuList.map((menu, i) => {
      return (
        <li key={i} className={`gheader__list ${pathname.startsWith(`/${menu}`) && 'gheader__list--active'}`}>
          <Link to={`/${menu}`}>
            <span>{menu}</span>
          </Link>
        </li>
      );
    });
  return (
    <header className="gheader container">
      <div className="gheader__logo">
        <Link to="/">
          <img src="https://pngmafia.net/image/2019/01/3529520_0-min.png" alt="" />
        </Link>
      </div>
      <ul className="gheader__menu">{renderMenu()}</ul>
    </header>
  );
};

export default withRouter(GlobalHeader);
