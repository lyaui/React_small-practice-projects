import { Fragment } from 'react';
import MainHeader from './MainHeader.js';

function layout({ children }) {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
}

export default layout;
