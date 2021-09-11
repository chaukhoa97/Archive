import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './counter-slice';
import { champActions } from './champ-slice';
function ReduxComponent() {
  //? useSelector:
  const counter = useSelector((store) => store.countReducer.counter); //* useSelector((store) => store.sliceRef.sliceStateKey)
  const showCounter = useSelector((store) => store.countReducer.showCounter);
  const champName = useSelector((store) => store.champReducer.name);
  const champSkin = useSelector((store) => store.champReducer.skin);
  const dispatch = useDispatch();

  //? slice.actions.reducerFn(payload) - Button handlers
  const incrementHandler = () => {
    // dispatch({ type: 'increment', amount: 10 });
    dispatch(counterActions.increment({ amount: 10 })); //* counterActions.increment() returns the same object với dòng trên của Redux thuần
  };
  const toggleCounter = () => {
    dispatch(counterActions.toggle());
  };
  const nameHandler = () => {
    dispatch(champActions.changeName({ name: 'ahri' }));
  };
  const skinHandler = () => {
    dispatch(champActions.changeSkin('kda')); // Ko bắt buộc payload phải là 1 object
  };
  return (
    <>
      <h1>Redux: Count</h1>
      <button onClick={incrementHandler}>+10</button>
      <button onClick={toggleCounter}>Toggle</button>
      {showCounter && <h3>{counter}</h3>}

      <h1>Redux: Champions</h1>
      <button onClick={nameHandler}>Change name</button>
      <button onClick={skinHandler}>Change skin</button>
      <h3>{champName + ' ' + champSkin}</h3>
    </>
  );
}

export default ReduxComponent;
