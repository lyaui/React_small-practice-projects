import React from 'react';
import MainNavigation from '../layout/MainNavigation';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
