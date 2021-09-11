import React from 'react';
function MemoExample(props) {
  console.log('MemoExample RUNNING');
  return (
    <>
      <h1>useMemo example: </h1>
      {props.arr.map((n) => (
        <h3>{n}</h3>
      ))}
    </>
  );
}

export default React.memo(MemoExample);
