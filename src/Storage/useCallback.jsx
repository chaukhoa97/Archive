import React from 'react';
function CallbackExample(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default React.memo(CallbackExample);
