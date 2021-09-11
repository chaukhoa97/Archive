function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  //* A good rule of thumb is that elements inside the map() call need keys.
  // Key của 1 element (trong 1 array) là thứ có giá trị riêng biệt với các element khác (siblings) của nó,
  //    -> nên dùng ID từ dữ liệu -> dùng chính value từ dữ liệu làm key -> cuối cùng là index (không nên)
  const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);
  return <ul>{listItems}</ul>;
}

export default NumberList;
