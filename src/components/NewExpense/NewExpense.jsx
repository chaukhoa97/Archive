import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const expenseFormHandler = (expenseData) => {
    const expenseDataWithID = { ...expenseData, id: Math.random().toString() };
    props.onReceivingNewExpense(expenseDataWithID); //* === newExpenseHandler() trong App.js
  };

  return (
    <div className="new-expense">
      <h2>NewExpense.jsx</h2>
      <ExpenseForm onReceivingExpenseForm={expenseFormHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
