//? Là wrapper, bao quanh các component để style
import './Card.css';

function Card(props) {
  //* {props.children} là TẤT CẢ content nằm giữa opening tag và closing tag của Component
  return <div className={'card ' + props.className}>{props.children}</div>;
}

//! <Card> sẽ render đám {props.children} trong một <div>, <div> đó sẽ có 2 className:
//! Chỉ có <div> đó dc nhận style thôi, đám children ở trong không dc nhận (muốn có thì tự nhét className vào, xem ExpenseItme.jsx line 6)
//* Một là "card" để có border-radius và box-shadow
//* Hai là props.className để styling cho riêng từng children (chi tiết hơn ở Expenses.jsx):
//    Expenses.jsx và ExpenseItem đều cần border-radius và box shadow của "card" ở trên, nhưng 2 thằng đó có những style riêng
//    -> props.className sẽ styling cho cái div chứa đám children trong Expenses & ExpenseItem

export default Card;
