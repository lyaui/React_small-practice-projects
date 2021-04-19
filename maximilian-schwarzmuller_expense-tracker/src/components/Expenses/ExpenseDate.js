import React from 'react';
import './ExpenseDate.css';

function ExpenseDate({ date }) {
  const month = date.toLocaleString('zh-TW', { month: 'long' });
  const year = date.toLocaleString('zh-TW', { day: '2-digit' });
  const day = date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
