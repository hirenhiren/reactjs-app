import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) =>{

   const[selectedDate, setSelectedDate] = useState('2023')

    const dropDownChangeHandler = (expectedYearValue) =>{
        setSelectedDate(expectedYearValue);
    }

    const filteredYear = props.eItems.filter((expenseeYear) =>{
        return (expenseeYear.date.getFullYear().toString() === selectedDate)
    })

    return(
        <Card className='expenses'>
             <ExpenseFilter selected={selectedDate} onDropDownSelect = {dropDownChangeHandler}/>
             {filteredYear.length === 0 ? <p> No Data Found</p> : filteredYear.map((allExpenseItem) => <ExpenseItem  key={allExpenseItem.id} date={allExpenseItem.date} title={allExpenseItem.title} amount={allExpenseItem.amount}/>) }
             </Card>
    );
}

export default Expenses