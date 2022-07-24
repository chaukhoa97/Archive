import { useContext } from "react";
import NumberContext from "./number-context";

//1 useContext: Cho Component khả năng dùng Context (ở đây là `NumberContext`).
//! Trong trường hợp Component dc wrap bởi nhiều Provider, nó sẽ truy cập vào value của Provider GẦN NHẤT

function ContextExample() {
  const ctx = useContext(NumberContext); //! ctx = { num: n, fn } của App.js
  return (
    <div>
      <h3>{ctx.num}</h3>
      <h3>{ctx.fn()}</h3>
    </div>
  );
}

export default ContextExample;
