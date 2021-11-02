import React from 'react';
function MemoExample(props) {
  return (
    <>
      <h1>useMemo example: </h1>
      <h3>{props.text}</h3>
    </>
  );
}

export default React.memo(MemoExample);
