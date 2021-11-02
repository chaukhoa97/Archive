import React from 'react';
function ReactDotMemo(props) {
  //! Wrap React.memo ở các high level component -> các component ở dưới cũng sẽ ko bị re-evaluate -> high performance
  console.log('ReactDotMemo RUNNING');
  return (
    <>
      <h1>React.memo(childrenComponent):</h1>
      <h3>{props.text}</h3>
    </>
  );
}

//* Nếu chỉ export ReactDotMemo, thì lần nào App re-render -> ReactDotMemo cũng sẽ re-render theo
//* Ở đây vì dùng React.memo -> ReactDotMemo chỉ re-render khi props của nó thay đổi. Ở đây props.text = const ctx = 0 -> props kbh thay đổi -> ReactDotMemo kbh re-render
export default React.memo(ReactDotMemo);
