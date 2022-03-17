import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./slice1";
import { changeChamp } from "./slice2-action-creator";

function ReduxComponent() {
  //1 Redux 4: useSelector((store) => store.slice.stateProperty) -> Lấy value từ store state object, ở đây để render ra (line 37)
  const counter = useSelector((store) => store.counter.counter);
  const showCounter = useSelector((store) => store.counter.showCounter);
  const champName = useSelector((store) => store.champ.name);
  const champSkin = useSelector((store) => store.champ.skin);

  //1 Redux 5: dispatch(slice.actions.reducerName({action.payload})
  const dispatch = useDispatch();
  const incrementHandler = () => {
    //2 Dispatch kiểu Redux thuần vs Redux Toolkit
    dispatch({ type: "increment", amount: 10 }); // dispatch (<action obj>) của Redux thuần
    dispatch(counterActions.increment({ amount: 10 }));
    // Ngoài ra hàm dispatch cũng return action obj - `console.log(dispatch(...))` -> { "type": "counter/increment", "payload": {"amount": 10} }
  };
  const toggleCounter = () => {
    dispatch(counterActions.toggle());
  };

  //* dispatch(Action Creator Thunk)
  const champHandler = () => {
    dispatch(changeChamp({ name: "Jhin", skin: "hac tinh" }));
  };

  return (
    <>
      <h1>Redux:</h1>
      <h4>Redux: Count</h4>
      <button onClick={incrementHandler}>+10</button>
      <button onClick={toggleCounter}>Toggle</button>
      {showCounter && <h5>{counter}</h5>}

      <h4>Redux: Champions</h4>
      <button onClick={champHandler}>Change champ</button>
      <h5>{champName + " " + champSkin}</h5>
    </>
  );
}

export default ReduxComponent;
