import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './state-action';
import { changeChamp } from './action-creator';

function ReduxComponent() {
  //? Redux 5: useSelector((store) => store.stateObjectProperty)
  //* useSelector: Lấy value từ state object, ở đây để render ra (line 32)
  const counter = useSelector((store) => store.countReducer.counter); //* useSelector((store) => store.sliceRef.stateObjectProperty)
  const showCounter = useSelector((store) => store.countReducer.showCounter);
  const champName = useSelector((store) => store.champReducer.name);
  const champSkin = useSelector((store) => store.champReducer.skin);
  const dispatch = useDispatch(); //* useDispatch returns the actual action object

  //? Redux 6: dispatch(slice.actions.reducerName({action.payload})
  const incrementHandler = () => {
    // dispatch({ type: 'increment', amount: 10 }); // Cách call dispatch của Redux thuần
    dispatch(counterActions.increment({ amount: 10 })); //* counterActions.increment() cùng chức năng với dòng trên
  };
  const toggleCounter = () => {
    dispatch(counterActions.toggle());
  };
  //* Action creator
  const champHandler = () => {
    dispatch(changeChamp({ name: 'Jhin', skin: 'hac tinh' }));
  };

  return (
    <>
      <h1>Redux: Count</h1>
      <button onClick={incrementHandler}>+10</button>
      <button onClick={toggleCounter}>Toggle</button>
      {showCounter && <h3>{counter}</h3>}

      <h1>Redux: Champions</h1>
      <button onClick={champHandler}>Change champ</button>
      <h3>{champName + ' ' + champSkin}</h3>
    </>
  );
}

export default ReduxComponent;
