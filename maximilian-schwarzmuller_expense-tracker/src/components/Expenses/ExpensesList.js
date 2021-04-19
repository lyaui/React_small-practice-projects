import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ filteredExpenses }) {
  if (!filteredExpenses.length)
    return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>;

  return (
    <ul className='expenses-list'>
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
    </ul>
  );
}

export default ExpensesList;
