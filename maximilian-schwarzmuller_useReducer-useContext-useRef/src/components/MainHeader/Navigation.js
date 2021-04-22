import React from 'react';
import { useAuthVal } from '../contexts/authContext';
import classes from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn, onLogout } = useAuthVal();
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
