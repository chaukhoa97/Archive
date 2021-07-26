import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    // Nếu có ul thì bên trong phải có dấu {} (vì là expression)
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
      ;
    </ul>
  );
}

export default ExpensesList;
