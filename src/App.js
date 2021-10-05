import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState, useCallback, useMemo, useEffect } from 'react';
import ReducerExample from './Storage/useReducer';
import StateExample from './Storage/useState';
import numberContext from './Storage/Context/number-context';
import ContextExample from './Storage/useContext';
import ReactDotMemo from './Storage/React-dot-memo';
import CallbackExample from './Storage/useCallback';
import MemoExample from './Storage/useMemo';
import Forward from './Storage/Custom Hook/Forward';
import Backward from './Storage/Custom Hook/Backward';
import ReduxComponent from './Redux/redux-component';
import { useSelector } from 'react-redux';
import EventTarget from './Storage/EventTarget';

let firstRender = true;
function App() {
  console.log('App.js RUNNING');

  const INITITAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Dummy expense',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];
  const [expenses, setExpenses] = useState(INITITAL_EXPENSES);

  const newExpenseHandler = (newExpense) => {
    //! Updating State that depends on Previous State (KO DC NHẦM QUA CÁCH 1):
    //  Cả 2 cách trong nhiều trường hợp đều đúng, nhưng nếu schedule nhiều state updates quá thì expenses State xui xui lúc mình dùng sẽ bị outdate.
    //  setExpenses([newExpense, ...expenses]);
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  //? Context
  const n = 0;
  const fn = () => 1;

  //? useCallback(storedFn, dependencyArray): Khi app re-evaluate, function trong useCallback sẽ ko re-create lại.
  //* Ở đây callbackButtonHandler, là prop của CallbackExample.jsx, ko bị re-create khi App re-evaluate
  //*   -> CallbackExample sẽ ko bị re-evaluate vô ích vì prop của nó (callbackButtonHandler) giờ sẽ không thay đổi
  // let temp = true;
  // setTimeout(() => (temp = false), 2000);
  const [temp, setTemp] = useState(true);
  setTimeout(() => setTemp(false), 2000);
  const [num, setNum] = useState(0);
  const callbackButtonHandler = useCallback(() => {
    if (temp) {
      setNum((prevNum) => prevNum + 1);
    }
  }, [temp]); //! Nếu ko có dependency là [temp], if(temp) sẽ ko dc cập nhật thành 0 bởi setTimeout -> button luôn hoạt động

  //? useMemo(expensiveFn, dependencyArray): Với expensiveFn là function trả về Reference value
  //? ÍT DÙNG HƠN useCallback: Chỉ dùng khi function này quá phức tạp (ex: Sort, fetch,...) mà value ko đổi (nhưng vẫn phải re-initialize vì đây là Reference)
  const arr = useMemo(() => [1, 5, 3], []);

  //? P1: Side effect/Async code with Redux
  //* Redux store thay đổi -> App do có useSelector() sẽ dc re-render -> appCart sẽ luôn dc update tương ứng với state.cart
  const appCart = useSelector((state) => state.cart);
  useEffect(() => {
    // Lần đầu render App sẽ chạy useEffect -> PUT cart trống lên database(bad practice) -> Thêm firstRender logic
    if (firstRender) {
      firstRender = false;
      return;
    }
    fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(appCart),
    });
  }, [appCart]); // Vì appCart ở trong dependency array nên mỗi lần App re-render, useEffect cũng sẽ PUT lên database

  return (
    //* ~ component dc wrap bởi <numberContext.Provider> sẽ dùng dc value object của nó thông qua useContext()
    <numberContext.Provider value={{ num: n, fn }}>
      <NewExpense onReceivingNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />

      <EventTarget></EventTarget>
      <ReducerExample></ReducerExample>
      <StateExample></StateExample>
      <ContextExample></ContextExample>
      <ReactDotMemo text={n}></ReactDotMemo>
      <div className="useCallback">
        <CallbackExample onClick={callbackButtonHandler}>Yo wtf</CallbackExample>
        <h3>{num}</h3>
      </div>
      <MemoExample arr={arr}></MemoExample>
      <div className="custom-hook">
        <h1>Custom Hook:</h1>
        <Forward></Forward>
        <Backward></Backward>
      </div>
      <ReduxComponent></ReduxComponent>
    </numberContext.Provider>

    //! Context chỉ nên dc dùng cho ~ state ko thay đổi liên tục. Ngc lại thì dùng useState như bt
  );
}

export default App;
