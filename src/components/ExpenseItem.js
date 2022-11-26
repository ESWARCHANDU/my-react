import React,{useState} from 'react'
import './ExpenseItem.css';
import './Expensedate.js';
import ExpenseDate from './Expensedate.js';

const ExpenseItem=(props)=> {
 
  const [title,setTitle] = useState(props.title);
  const changeHandler=()=>{
    setTitle("updated!!")
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs.{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;