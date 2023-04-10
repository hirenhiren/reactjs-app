import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem = (props) =>{
    // const date = new Date('2023, 5, 5');
    // const title = 'Chocolate';
    // const amount = '450';
    return(
        <div className='expense-item'>
            <ExpenseDate eDate={props.date}/>
          <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
          </div>
        </div>
    );
}

export default ExpenseItem