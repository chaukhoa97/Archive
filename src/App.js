//! Truyền data xuống bằng props:
//! App.js(từ expenseData ở line 5) -> Expenses.jsx (line 43) -> ExpenseItem.jsx -> ExpenseDate.jsx
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
function App() {
  const INITITAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Dummy expense',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];

  const [expenses, setExpenses] = useState(INITITAL_EXPENSES);

  //! Truyền data lên bằng onSomething:
  //    1. Từ ExpenseForm.jsx truyền expenseData (line 22) sang NewExpense.jsx
  //    2. Ở NewExpense.jsx thêm ID vào expenseData -> expenseDataWithID rồi truyền sang App.js
  //    3. Ở App.js(here):
  const newExpenseHandler = (expenseDataWithID) => {
    //! Updating State that depends on Previous State
    //    Cả 2 cách trong nhiều trường hợp đều đúng, nhưng nếu schedule nhiều state updates quá thì expenses State xui xui lúc mình dùng sẽ bị outdate. Nếu dùng cách dưới thì ok.
    //    setExpenses([expenseDataWithID, ...expenses]);
    setExpenses((prevExpenses) => [expenseDataWithID, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onReceivingNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
