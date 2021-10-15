import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './slice1';
import { changeChamp } from './slice2-action-creator';

function ReduxComponent() {
  //? Redux 4: useSelector((store) => store.sliceRef.stateObjectProperty) -> Lấy value từ state object, ở đây để render ra (line 31)
  const counter = useSelector((store) => store.countReducer.counter);
  const showCounter = useSelector((store) => store.countReducer.showCounter);
  const champName = useSelector((store) => store.champReducer.name);
  const champSkin = useSelector((store) => store.champReducer.skin);

  //? Redux 5: dispatch(slice.actions.reducerName({action.payload})
  const dispatch = useDispatch();
  const incrementHandler = () => {
    // dispatch({ type: 'increment', amount: 10 }); // Cách call dispatch của Redux thuần
    dispatch(counterActions.increment({ amount: 10 })); //* counterActions.increment() cùng chức năng với dòng trên
    //* Log ra action object - line 10 slice.js -> { "type": "counter/increment", "payload": {"amount": 10}}
    console.log(dispatch(counterActions.increment({ amount: 10 })));
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
