import { useContext } from 'react';
import numberContext from './Context/number-context';

//? useContext: Cho ContextExample (ở đây cụ thể là ctx) khả năng truy cập vào value của <numberContext.Provider>
// Trong trường hợp Component dc wrap bởi nhiều Provider, nó sẽ truy cập vào value của Provider GẦN NHẤT

function ContextExample() {
  const ctx = useContext(numberContext); //! ctx = { num: n, fn } của App.js
  return (
    <div>
      <h1>ctx.num & ctx.fn in App.js:</h1>
      <h3>{ctx.num}</h3>
      <h3>{ctx.fn()}</h3>
    </div>
  );
}

export default ContextExample;
