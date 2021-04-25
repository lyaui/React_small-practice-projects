import React, { useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useCartValue } from '../../context/cartContext';

function HeaderCartButton({ onShowCart }) {
  const { items } = useCartValue();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numOfCartItems = items.reduce((acc, cur) => acc + cur.amount, 0);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);
  return (
    <button className={btnClasses} onClick={onShowCart}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
