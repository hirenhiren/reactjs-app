import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) =>{
  const submitExpenseHandler = (enteredExpense) =>{
    const expenseEntryWithID = {...enteredExpense,id:Math.random().toString()};
    props.onGettingExpenseEntry(expenseEntryWithID);
  }
    return(
        <div className='new-expense'>
          <ExpenseForm onSumbitExpense={submitExpenseHandler}/>
        </div>
    );
}

export default NewExpense