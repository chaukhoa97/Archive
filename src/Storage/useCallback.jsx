import React from 'react';
import {
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
function CallbackExample(props) {
  const params = useParams(); //* { "hookName": "useCallbackkkk"}
  const history = useHistory(); //* Chuyển trang như <Link>, nhưng chuyển PROGRAMMATICALLY (so với phải click như <Link>)
  setTimeout(() => {
    history.push('/redux');
  }, 50000);
  const location = useLocation(); //* {"pathname": "/hooks/useCallbackkkk", "search": "?sort=asc"} : Max 21
  const routeMatch = useRouteMatch(); // Max 23
  //* {
  //*   "path": "/hooks/:hookName",
  //*   "url": "/hooks/useCallbackkkk",
  //*   "isExact": true,
  //*   "params": {
  //*       "hookName": "useCallbackkkk"
  //*   }

  return (
    <>
      <h1>{params.hookName}</h1>
      <button onClick={props.onClick}>{props.children}</button>
    </>
  );
}

export default React.memo(CallbackExample);
