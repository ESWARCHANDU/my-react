import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';
import ExpensesChart from './expensechart.js';
import NewExpense from './newexpense/newexpense';
import Filteryear from './newexpense/filteryear';
import ExpensesList from './expenseslist.js'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })



  return (
    <div className="expenses">
      <h2 className="heading">Billing Section</h2>
      <Filteryear selected={filteredYear} onChangeFilter={filterChangeHandler}> </Filteryear>
     <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>


    </div>
  );
}
export default Expenses;