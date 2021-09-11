import React from 'react';
function CallbackExample(props) {
  console.log('CallbackExample RUNNING');
  return (
    <>
      <h1>useCallback example: </h1>
      <button onClick={props.onClick}>{props.children}</button>
    </>
  );
}

export default React.memo(CallbackExample);
