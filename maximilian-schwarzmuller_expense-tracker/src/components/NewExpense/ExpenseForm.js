import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ addExpenseItem, handleAddNewBtn }) {
  const [userInput, setUserInput] = useState({ title: '', amount: '', date: '' });

  const handleInputChange = (e) => {
    const property = e.target.id;
    const value = e.target.value;
    setUserInput((previousState) => ({ ...previousState, [property]: value }));
  };

  const handleFormSubmit = (e) => {
    handleAddNewBtn(false)();
    e.preventDefault();
    const expenseData = {
      ...userInput,
      amount: parseFloat(userInput.amount),
      date: new Date(userInput.date),
    };
    addExpenseItem(expenseData);
    setUserInput({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input id='title' value={userInput.title} onChange={handleInputChange} type='text' />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            value={userInput.amount}
            onChange={handleInputChange}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            value={userInput.date}
            onChange={handleInputChange}
            type='date'
            min='2020-01-01'
            max='2200-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={handleAddNewBtn(false)}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
