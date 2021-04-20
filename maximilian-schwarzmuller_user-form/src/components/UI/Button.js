import React from 'react';
import classes from '../UI/Button.module.css';

function Button({ type, onClick, children }) {
  return (
    <button className={classes.button} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
