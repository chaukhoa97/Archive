import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  //* 1 item trong props.items:
  // {
  //   id: 'e1',
  //   title: 'Dummy expense',
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // }
  return (
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
