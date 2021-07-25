//? Container màu đen bao bọc tất cả các ExpenseItem.jsx
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const yearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //! <Card> sẽ render đám jsx bên trong nó(props.children) trong một <div>
  //! Ở đây className "expenses" KHÔNG styling cho Card, mà cho cái <div> ở trên
  //*   <div> này ngoài card styling ra (bao gồm border-radius và box-shadow),
  //*   thì còn có thêm props.className - ở đây là "expenses", ở trong Expenses.css
  //! Đám <ExpenseItem> KHÔNG nhận className "card" và "expense-item" (chỉ có <div> chính nhận dc)
  return (
    <Card className="expenses">
      <h2 className="expenses-label">Expenses.jsx</h2>

      {/* Filter */}
      <ExpenseFilter
        selected={filteredYear}
        onDropdownChange={yearFilterHandler}
      />

      {/* Expense Items */}
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
