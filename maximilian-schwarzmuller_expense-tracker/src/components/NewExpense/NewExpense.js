import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense({ addExpenseItem }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const handleAddNewBtn = (isShow) => () => {
    setShowAddForm(isShow);
  };
  return (
    <div className='new-expense'>
      {!showAddForm && (
        <button type='submit' onClick={handleAddNewBtn(true)}>
          Add New Expense
        </button>
      )}
      {showAddForm && (
        <ExpenseForm
          handleAddNewBtn={handleAddNewBtn}
          addExpenseItem={addExpenseItem}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
