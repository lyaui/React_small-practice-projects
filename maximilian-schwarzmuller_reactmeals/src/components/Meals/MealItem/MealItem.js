import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useCartValue } from '../../../context/cartContext';

function MealItem({ id, name, description, price }) {
  const setPrice = `${price.toFixed(2)}`;
  const { addItem } = useCartValue();
  const addToCartHandler = (amount) => {
    addItem({
      id,
      name,
      amount,
      price: setPrice,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{setPrice}</div>
      </div>
      <div>
        <MealItemForm addToCartHandler={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
}

export default MealItem;
