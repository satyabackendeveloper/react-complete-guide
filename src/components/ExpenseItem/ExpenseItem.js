import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpenseDate
                expenseDate={props.date}
            />
            <div>
                <h2 className="expense-item__description">
                    {props.title}
                </h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
        </div>
    );
}
export default ExpenseItem;