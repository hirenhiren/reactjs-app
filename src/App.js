import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';

const DUMMY_DATA = [
  {
     date:new Date(2023, 5, 5),
     title:'Food',
     amount:400
  },
  {
    date:new Date(2023, 5, 6),
     title:'Chocolate',
     amount:300
  },
  {
    date:new Date(2023, 5, 7),
     title:'Cake',
     amount:600
  },
  {
    date:new Date(2023, 5, 8),
     title:'IceCream',
     amount:100
  }
]

const App = () =>{

 
  return(
    <div>
      <NewExpense />
      <Expenses item={DUMMY_DATA}/>
    </div>
  );
}

export default App