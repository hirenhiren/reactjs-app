import { useState } from 'react';
import './ExpenseForm.css';



const ExpenseForm = (props) =>{
const[enteredDate,setEnteredDate] = useState('');
const[enteredTitle,setEnteredTitle] = useState('');
const[enteredAmount,setEnteredAmount] = useState(''); 

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);  
    }

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const ExpenseEntry = {
            date : new Date(enteredDate),
            title: enteredTitle,
            amount:enteredAmount 
        }
        props.onSumbitExpense(ExpenseEntry);
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount('');
    }

    return (
           <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
             <div className='new-expense__control'>
                <label>Expense Date</label>
                <input value={enteredDate} onChange={dateChangeHandler} type="date" />
              </div>
              <div className='new-expense__control'>
                <label>Expense Item</label>
                <input value={enteredTitle} onChange={titleChangeHandler} type="text" />
              </div>
              <div className='new-expense__control'>
                <label>Expense Amount</label>
                <input value={enteredAmount} onChange={amountChangeHandler} type="number" />
              </div>
              <button type="submit"> Add Expense </button>
              </div>
           </form>
    );
}

export default ExpenseForm