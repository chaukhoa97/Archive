//? Là wrapper, bao quanh các component để style
import './Card.css';

function Card(props) {
  //* {props.children} là TẤT CẢ content nằm giữa opening tag và closing tag của Component
  return <div className={'card ' + props.className}>{props.children}</div>;
}

//? <Card> sẽ render đám {props.children} trong một <div>, <div> đó sẽ có 2 className:
//* Một là "card" để có border-radius và box-shadow
//* Hai là props.className để styling cho riêng từng children (chi tiết hơn ở Expenses.jsx):
//    <div> của Expenses.jsx và ExpenseItem đều đã có border-radius và box shadow của "card" ở trên,
//    props.className sẽ styling thêm cho 2 cái <div> trên, vì 2 thằng có những style riêng
//! Chỉ có <div> đó dc nhận style, đám children ở trong KHÔNG dc nhận
//!     (muốn có thì tự nhét className vào, xem ExpenseItem.jsx line 6)

export default Card;
