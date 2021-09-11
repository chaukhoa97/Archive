import React from 'react';
function ReactDotMemo(props) {
  //* Nếu ở dưới chỉ export ReactDotMemo, thì lần nào App re-evaluate -> ReactDotMemo cũng sẽ re-eveluate
  //* Ở đây vì có React.memo -> ReactDotMemo chỉ re-evaluate khi props của nó thay đổi:
  //* props.text = const ctx = 0 -> props kbh thay đổi -> ReactDotMemo kbh chạy lại
  //! Wrap React.memo ở các high level component -> các component ở dưới cũng sẽ ko bị re-evaluate -> high performance
  console.log('ReactDotMemo RUNNING');
  return (
    <>
      <h1>React.memo(childrenComponent):</h1>
      <h3>{props.text}</h3>
    </>
  );
}

export default React.memo(ReactDotMemo);
