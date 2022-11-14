import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/logo.png';

const Header = () => {
  const links = [
    {
      text: 'Rockets',
      path: '/',
      id: 0,
    },
    {
      text: 'Missions',
      path: '/missions',
      id: 1,
    },
    {
      text: 'My profile',
      path: '/myprofile',
      id: 2,
    },
  ];
  return (
    <header>
      <img src={logo} alt="spacehub logo" />
      <nav>
        <span>
          {' '}
          { links }
          {' '}
        </span>
      </nav>
    </header>
  );
};

export default Header;
