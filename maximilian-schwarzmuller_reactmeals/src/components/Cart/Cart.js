import React from 'react';
import Mordal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useCartValue } from '../../context/cartContext';

function Cart({ onHideCart }) {
  const { items: cartItems, totalAmount, addItem, removeItem } = useCartValue();
  const hasItems = cartItems.length > 0;
  const renderCartItems = () => (
    <ul className={classes['cart-items']}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={+item.price}
          onRemove={cartItemRemoveHandler(item.id)}
          onAdd={cartItemAddHandler(item)}
        ></CartItem>
      ))}
    </ul>
  );
  const cartItemRemoveHandler = (id) => () => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => () => {
    addItem({ ...item, amount: 1 });
  };

  return (
    <Mordal onHideCart={onHideCart}>
      {renderCartItems()}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{`$ ${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onHideCart} className={classes['button--alt']}>
          Close
        </button>
        {hasItems && (
          <button onClick={onHideCart} className={classes.button}>
            Order
          </button>
        )}
      </div>
      <div></div>
    </Mordal>
  );
}

export default Cart;
