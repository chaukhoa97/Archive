import { useReducer } from "react";

//* Reducer - Function that is used to update store: `const reducer = (prevState, action-to-the-prevState) => newState`
//* Định nghĩa general "reducer" trong progamming: Nhận vào input, transform --> output

const infoReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { loading: true };
    case "success":
      return { ...action, loading: false };
    default:
      throw Error("Unknown action: " + action.type);
  }
};

function ReducerExample() {
  const [info, dispatch] = useReducer(infoReducer, {
    loading: false,
    data: "",
  });
  const getInfo = () => {
    dispatch({ type: "loading" }); // info = `state` line 6 = { loading: true, data: "", type: "loading" }
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => dispatch({ type: "success", data: json })); // info = { loading: false, data: {...}, type: "success" }
    }, 1000);
  };

  return (
    <>
      {info.loading ? <h5>Loading...</h5> : <h5>{info.data.title}</h5>}
      <button onClick={getInfo}>Get data</button>
    </>
  );
}

export default ReducerExample;
