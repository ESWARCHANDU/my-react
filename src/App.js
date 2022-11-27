import React,{useState} from 'react';

import NewExpense from './components/newexpense/newexpense';
import Expenses from './components/Expenses';



const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'House',
    amount: 94.12,
    date: new Date(2022, 11, 14),
  },
  { id: 'e2', title: 'Lenovo TV', amount: 799.49, date: new Date(2022, 11, 12) },
  {
    id: 'e3',
    title: 'Bike Insurance',
    amount: 294.67,
    date: new Date(2022, 11, 28),
  },

  {
    id: 'e4',
    title: 'Electrical Bill',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;