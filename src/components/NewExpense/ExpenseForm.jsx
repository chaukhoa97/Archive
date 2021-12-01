import './ExpenseForm.css';
import React, { useState, useRef } from 'react';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(''); // event.target.value mặc định luôn luôn là string
  const [enteredDate, setEnteredDate] = useState('');
  //? useRef(initValue): amountRef value sẽ dc preserve khi Component re-render (giống useState). Nhưng khi amountRef thay đổi, nó ko khiến Component bị re-render (khác useState)
  //! Vì vậy, value show ra trên UI thì dùng useState. Còn những thứ khác như form người dùng nhập vào thì dùng useRef sẽ đỡ bị re-render hơn. Những thứ constant thì xem xét dùng JS variable như bình thường
  const amountRef = useRef();
  //* ref can be any valid JS, ví dụ như ở đây là numbẻ, ở line 60 là node trong DOM
  const numberRef = useRef(0); //! numberRef.current = 0
  setInterval(() => {
    numberRef.current = numberRef.current + 1;
    // console.log('numberRef.current: ' + numberRef.current);
  }, 50000);

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
          {/* Còn Controlled Component thì state của nó do React quản lý: <input value = {componentState}> -> Gõ phím -> update `componoentState` -> `value` của `input` update theo */}
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* amountRef.current bây giờ chính là <input> trong HTML -> Có thể gọi hàm (ex: amountRef.current.focus()) */}
          {/* Đây là 1 Uncontrolled Component vì state của input này là internal state, mình chỉ lấy value đó về bằng ref */}
          <input type="number" min="0.01" step="0.01" ref={amountRef} />
          <input
            type="checkbox"
            id="callbackRef"
            ref={(input) => {
              //* Với `input` là node trong DOM -> input.id = 'callbackRef'
              amountRef.current = input;
            }}
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
