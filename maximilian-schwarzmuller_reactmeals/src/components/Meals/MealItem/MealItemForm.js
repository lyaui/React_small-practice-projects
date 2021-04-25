import React, { useState, useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm({ addToCartHandler }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const enteredAmountNum = +amountRef.current.value;

    if (!enteredAmountNum || enteredAmountNum < 1 || enteredAmountNum > 5)
      return setAmountIsValid(false);
    addToCartHandler(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <Input
        ref={amountRef}
        label='Amount'
        input={{ id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
      ></Input>
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
