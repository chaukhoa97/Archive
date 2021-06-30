//* props Là attribute của các React component:
// <ExpenseItem date = '1' title = '2'></ExpenseItem> -> props.date = 1; props.title = 2;
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      {/** props.date của ExpenseItem == props.date của ExpenseDate  */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
