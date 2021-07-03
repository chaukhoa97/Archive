//? Container màu đen bao bọc tất cả các ExpenseItem.jsx
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
function Expenses(props) {
  //! <Card> sẽ render đám <ExpenseItem>(props.children) trong một <div>
  //! Ở đây className "expenses" KHÔNG styling cho Card, mà cho cái <div> ở trên
  //*   <div> này ngoài card styling ra (bao gồm border-radius và box-shadow),
  //*   thì còn có thêm props.className - ở đây là "expenses", ở trong Expenses.css
  //! Đám <ExpenseItem> KHÔNG nhận className "card" và "expense-item" (chỉ có <div> chính nhận dc)
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
