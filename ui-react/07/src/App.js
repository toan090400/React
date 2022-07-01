import './App.css';
import Exam from './components/Exam/Exam';
import NewExam from './components/NewExam/NewExam'

import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: '2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const onAddExpense = (data) => {
    setExpenses([data,...expenses])
  }
  const onDelete = (data) => {
    console.log(data)
  }
  return (
    <div>
      <NewExam onAddExpense={onAddExpense}/>
      <Exam items={expenses} onDeleteExam={onDelete}/>
    </div>
    
  );
}

export default App;
