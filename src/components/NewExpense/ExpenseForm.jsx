import './ExpenseForm.css';
import React, { useState, useRef } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(''); // event.target.value mặc định luôn luôn là string
  const [enteredDate, setEnteredDate] = useState('');
  //? useRef(initValue): Những thay đổi của amountRef sẽ dc giữ lại khi Component re-render (giống useState)
  //?     nhưng khi amountRef thay đổi, nó cũng sẽ ko khiến Component bị re-render (khác useState)
  //! Vì vậy, những value show ra trên UI thì nên dùng useState, còn ngc lại thì dùng useRef
  const amountRef = useRef();
  const numberRef = useRef(0);
  setInterval(() => {
    numberRef.current = numberRef.current + 1;
    console.log('numberRef.current: ' + numberRef.current);
  }, 10000);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //* Tránh reload lại trang
    console.log(amountRef.current); //! ref.current có thể là bất cứ thứ gì, kể cả một Node
    console.log('amountRef.current.value: ' + amountRef.current.value); // Value mình nhập vào ở NewExpense
    const enteredAmount = amountRef.current.value;
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //* props.onReceivingExpenseForm() === expenseFormHandler() ở NewExpense.jsx -> expenseFormHandler(expenseData)
    // Tương đương với onChange ở line 47, chỉ khác vì ở đây là Custom Component nên phải call manually
    props.onReceivingExpenseForm(expenseData);

    // Xóa input khi người dùng submit xong
    setEnteredTitle('');
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
          {/* amountRef.current bây giờ chính là <input> trong HTML -> Có thể gọi hàm (ex: amountRef.current.focus()) */}
          <input type="number" min="0.01" step="0.01" ref={amountRef} />
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
