import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const expenseFormHandler = (expenseData) => {
    const expenseDataWithID = { ...expenseData, id: Math.random().toString() };
    props.onReceivingNewExpense(expenseDataWithID); //* === newExpenseHandler ở line 32 App.js
  };

  return (
    <div className="new-expense">
      <ExpenseForm onReceivingExpenseForm={expenseFormHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
