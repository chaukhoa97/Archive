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
    {
      id: 'e2',
      title: 'Dummy expense 2',
      amount: 2.12,
      date: new Date(2021, 7, 14),
    },
  ];
  const [expenses, setExpenses] = useState(INITITAL_EXPENSES);
  const newExpenseHandler = (newExpense) => {
    //! Updating State that depends on Previous State
    //  Nên dùng cách dưới. Cả 2 cách trong nhiều trường hợp đều đúng, nhưng nếu schedule nhiều state updates quá thì expenses State xui xui lúc mình dùng sẽ bị outdate.
    //  setExpenses([newExpense, ...expenses]);
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onReceivingNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
