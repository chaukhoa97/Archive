//? Container màu xám, chứa từng chi tiêu khác nhau. Mỗi item bao gồm date, description và tiền
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

//! Hai <div> __description & __price KHÔNG nhận className "card" và "expense-item"
// Hai thằng lần lượt dc chúng ta pass vào className "e-i__desciprtion" và "e-i__price" để style
function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
