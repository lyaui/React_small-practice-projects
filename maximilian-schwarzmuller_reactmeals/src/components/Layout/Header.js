import React from 'react';
import classes from './Header.module.css';
import headerImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header({ onShowCart }) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt='A table full of delicious food!' />
      </div>
    </>
  );
}

export default Header;
