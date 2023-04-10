import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const Dummy_Data = [
  {
    id:1,
    date:new Date('9, 5, 2022'),
    title:'Chocolate',
    amount:500
  },
  {
    id:2,
    date:new Date('9,5,2022'),
    title:'Cake',
    amount:700
  },
  {
    id:3,
    date:new Date('9,5,2021'),
    title:'Ice Cream',
    amount:300
  },
  {
    id:4,
    date:new Date('9,5,2019'),
    title:'Drink',
    amount:200
  }

]

const App = () =>{
  const[dailyExpenses, setDailyExpenses] = useState(Dummy_Data);

  const ExpenseEntryInAppHandler = (receivedExpenseEntry) =>{
    setDailyExpenses((prevExpenss) =>{
      return [receivedExpenseEntry, ...prevExpenss];
    })
  }
  return(
    <div>
      <NewExpense onGettingExpenseEntry={ExpenseEntryInAppHandler}/>
      <Expenses eItems = {dailyExpenses}/>
    </div>
  );
}

export default App