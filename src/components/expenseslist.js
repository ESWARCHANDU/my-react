import React from 'react'
import './expenseslist.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList=(props)=>{
     if(props.items.length===0){
         return(
         <div class="expenses-list__fallback"><h2>No items Found</h2>
     </div>
         );
     }
    return(
        <ul class="expenses-list"> 
         {props.items.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              ></ExpenseItem>))}          
    
    </ul>);
}
export default ExpensesList;