import React,{useState} from 'react';

import ExpenseForm from './expenseform';
import './newexpense.css';

const NewExpense = (props) => {
  const [setEditing,ChangeEditing]= useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    ChangeEditing(false);
  };
  const startEditingHandler=()=>{
      ChangeEditing(true);
  };
 const stopEditingHandler=()=>{
     ChangeEditing(false);
 }
  return (
    <div className='new-expense'>
        {!setEditing &&<  button onClick={startEditingHandler}>Add New Expense</button>}
      {setEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;