import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ReduxComponent from './Redux/redux-component';
import { champActions } from './Redux/slice2-action-creator';
import numberContext from './Storage/Context/number-context';
import Backward from './Storage/Custom Hook/Backward';
import Forward from './Storage/Custom Hook/Forward';
import EventTarget from './Storage/EventTarget';
import ReactDotMemo from './Storage/React_memo';
import CallbackExample from './Storage/useCallback';
import ContextExample from './Storage/useContext';
import MemoExample from './Storage/useMemo';
import ReducerExample from './Storage/useReducer';
import StateExample from './Storage/useState';
import { Route, Switch, Redirect, NavLink, Link } from 'react-router-dom';
import './MainHeader.css';

function App() {
  console.log('App.js RUNNING');
  //? Lazy init: `expenseviveFn` chỉ chạy ở lần render đầu tiên để tạo ra giá trị init của state
  const expensiveFn = () => {
    console.log(100);
    return 100;
  };
  const [lazy, setLazy] = useState(expensiveFn); // Hoặc useState(() => expensiveFn()); KHÔNG PHẢI useState(expenseiveFn())

  const INITITAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Dummy expense',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];
  const [expenses, setExpenses] = useState(INITITAL_EXPENSES);

  //? Context
  const n = 0;
  const fn = () => 1;

  //? useCallback(storedFn, dependencyArray): Khi app re-evaluate, function trong useCallback sẽ ko re-create lại.
  //* Ở đây callbackButtonHandler, là prop của useCallback.jsx, ko bị re-create khi App re-evaluate -> CallbackExample sẽ ko bị re-evaluate vô ích vì prop của nó (callbackButtonHandler) giờ sẽ không thay đổi
  // let temp = true;
  // setTimeout(() => (temp = false), 2000);
  const [temp, setTemp] = useState(true);
  setTimeout(() => setTemp(false), 5000);
  const [num, setNum] = useState(0);
  const callbackButtonHandler = useCallback(() => {
    if (temp) {
      setNum((prevNum) => prevNum + 1);
    }
  }, [temp]); //! Nếu ko có dependency, temp ở trong if(temp) sẽ ko dc cập nhật thành false bởi setTimeout -> button ko bị disable

  //? useMemo(expensiveFn, dependencyArray): Với expensiveFn trả về Reference value
  //! ÍT DÙNG HƠN useCallback: Chỉ dùng khi function này quá phức tạp (ex: Sort, fetch,...) mà value ko đổi (nhưng vẫn phải re-initialize vì đây là Reference)
  const expensiveFnResult = useMemo(() => 'an expensive fn created me', []);

  //? Side effect/Async code with Redux 1: Code ở trong Component (với useEffect). KO DC BỎ Ở TRONG reducer (vì reducerFn phải là pure)
  //* Redux store thay đổi -> App do có useSelector() sẽ dc re-render -> UI sẽ luôn dc update tương ứng với state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(champActions.changeName({ name: 'Vayne' }));
    const sendRequest = async () => {
      try {
        await fetch('https://react-http-6b4a6.firebaseio.com/cart.json');
        dispatch(champActions.changeSkin('Sieu pham'));
      } catch (error) {}
    };
    sendRequest();
  }, [dispatch]);

  return (
    //* ~ component dc wrap bởi <numberContext.Provider> sẽ dùng dc value object của nó thông qua useContext()
    <numberContext.Provider value={{ num: n, fn }}>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/redux" />
        </Route>
        <Route path="/hooks" exact>
          <NavLink activeClassName="active" to="/hooks/useReducer">
            useReducer
          </NavLink>
          <br></br>
          <Link to="/hooks/useCallbackkkk">useCallback</Link>
        </Route>
        <Route path="/hooks/useReducer">
          <ReducerExample></ReducerExample>
        </Route>
        <Route path="/hooks/:hookName">
          <div className="useCallback">
            <CallbackExample onClick={callbackButtonHandler}>
              Disabled sau 5s
            </CallbackExample>
            <h3>{num}</h3>
          </div>
        </Route>
        <Route path="/redux" exact>
          <ReduxComponent></ReduxComponent>
          <EventTarget></EventTarget>
        </Route>
      </Switch>
      /* #region */
      {/* <NewExpense onReceivingNewExpense={newExpenseHandler} /> */}
      {/* <Expenses items={expenses} /> */}
      {/* <StateExample></StateExample> */}
      {/* <ContextExample></ContextExample> */}
      {/* <ReactDotMemo text={n}></ReactDotMemo> */}
      {/* <MemoExample text={expensiveFnResult}></MemoExample> */}
      {/* <Care>
        <NoCare></NoCare>
      </Care> */}
      {/* <div className="custom-hook">
        <h1>Custom Hook:</h1>
        <Forward></Forward>
        <Backward></Backward>
      </div> */}
      /* #endregion */
    </numberContext.Provider>
    //! Context chỉ nên dc dùng cho ~ state ko thay đổi liên tục. Ngc lại thì dùng useState như bt
  );
}

//? Trước khi áp optimizations như memo/useMemo, hãy thử chia component ra thành 2 phần, phần thay đổi(care about state) và phần ko thay đổi (doesn't care about state)
function Care(props) {
  const [careValue, setCareValue] = useState('Care');
  console.log('Care running');
  return (
    <>
      <h1>{careValue}</h1>
      <button onClick={() => setCareValue((prev) => prev + '0')}>
        Thêm số 0
      </button>
      {props.children}
    </>
  );
}
function NoCare() {
  console.log('NoCare running');
  return <h5>NoCare</h5>;
}

export default App;

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/redux">
              Redux & Form
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/hooks">
              Hooks
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
