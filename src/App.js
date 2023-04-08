import React from 'react';
import Item from './components/Item';
import ExpenseItem from './components/ExpenseItem';
const App = (props) =>{
  const expenses = [
    {
      id:'e1',
      date: new Date(2023, 4, 2),
      title:'Newspaper',
      amount:500
    },
    {
      id:'e2',
      date: new Date(2023, 4, 3),
      title:'Travel',
      amount:120
    },
    {
      id:'e3',
      date: new Date(2023, 4, 4),
      title:'Movie',
      amount:320
    },
    {
      id:'e4',
      date: new Date(2023, 4, 5),
      title:'Cloths',
      amount:200
    }
  ]
  return(
    <div>
      <h1> Learn ReactJs From Scratch </h1>
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}/>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
      <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}/>
    </div>
  );
}

export default App