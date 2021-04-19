import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart.js';
import Card from '../UI/Card';

function Expenses({ expenses }) {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const filterSelectedYear = (selectedYear) => {
    if (!selectedYear) return;
    setFilteredExpenses(
      expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear),
    );
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesFilter filterSelectedYear={filterSelectedYear}></ExpensesFilter>
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
