//* Props của ExpenseItem dc truyền từ App.js -> Expenses.jsx -> ExpenseItem.jsx -> ExpenseDate.jsx
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expensesData = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //! Tổng kết: Từ ExpenseForm.jsx truyền expenseData ở line 22 sang NewExpense.jsx.
  //    Ở NewExpense.jsx thêm ID vào expenseData -> expenseDataWithID rồi truyền sang App.js
  //    Ở App.js(here) console.log
  const newExpenseHandler = (expenseDataWithID) => {
    console.log(expenseDataWithID);
  };

  return (
    <div>
      <NewExpense onReceivingNewExpense={newExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
