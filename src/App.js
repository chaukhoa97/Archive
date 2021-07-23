//! Truyền data xuống bằng props:
//! App.js(từ expenseData ở line 5) -> Expenses.jsx (line 43) -> ExpenseItem.jsx -> ExpenseDate.jsx
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

  //! Truyền data lên bằng onSomething:
  //    1. Từ ExpenseForm.jsx truyền expenseData (line 22) sang NewExpense.jsx
  //    2. Ở NewExpense.jsx thêm ID vào expenseData -> expenseDataWithID rồi truyền sang App.js
  //    3. Ở App.js(here) console.log:
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
