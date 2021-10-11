import { Fragment } from 'react';
import './ExpenseDate.css';
import ReactDOM from 'react-dom';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    //! <Fragment></Fragment> === <>...</>, chỉ khác là cách ngắn ko có thêm key được, dùng để render các JSX ở cạnh nhau (ko cần div cha ở ngoài)
    <Fragment>
      {ReactDOM.createPortal(
        //* 2nd argument của createPortal: JSX element, nơi render trong index.html (real DOM) - ở đây là #portal
        <h2>
          This h2 in ExpenseDate will be brought to the top of the file by
          ReactDOM.createPortal()
        </h2>,
        document.querySelector('#portal')
      )}
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </Fragment>
  );
}

export default ExpenseDate;
