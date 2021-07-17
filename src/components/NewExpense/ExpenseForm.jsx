import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(''); // event.target.value mặc định là string hết
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //! Khi listen to event sẽ có một object - console.log(event) để thấy object đó
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //* Tránh reload lại trang
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //! props.onReceivingExpenseForm === Hàm expenseFormHandler ở line 4 NewExpense.jsx
    // -> expenseFormHandler(expenseData): Call hàm expenseFormHandler với argument là expenseData ở line 22
    // Tương đương với onChange ở line 47, chỉ khác vì ở đây là Custom Component nên phải call manually
    props.onReceivingExpenseForm(expenseData);

    // Xóa input khi người dùng submit xong
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            //* Built-in component: <input onChange = {titleChangeHandler} /> gọi hàm tCH mỗi khi có Change Event
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
