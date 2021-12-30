import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import {
  Link,
  Outlet,
  NavLink,
  useSearchParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import styles from './nav.module.scss';

function App() {
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

  //? useCallback(storedFn, dependencyArray): Trả về chính storedFn (ở đây là hàm setTemp). Khi App re-evaluate, storedFn sẽ ko bị re-create lại.
  // Ở đây callbackButtonHandler, là prop của useCallback.jsx, ko bị re-create khi App re-evaluate -> CallbackExample sẽ ko bị re-evaluate vô ích vì prop của nó (callbackButtonHandler) giờ sẽ không thay đổi
  const [temp, setTemp] = useState(true);
  setTimeout(() => setTemp(false), 5000);
  const [num, setNum] = useState(0);
  const callbackButtonHandler = useCallback(() => {
    if (temp) {
      setNum((prevNum) => prevNum + 1);
    }
  }, [temp]); //! Nếu ko có dependency, temp ở trong if(temp) sẽ ko dc cập nhật thành false bởi setTimeout -> button ko bị disable

  //? useMemo(expensiveFn, dependencyArray): Trả về result (reference value - ở đây là object) của 1 function (ở đây là expensiveFn)
  //! ÍT DÙNG HƠN useCallback: Chỉ dùng khi function này quá phức tạp (ex: Sort,...) mà value ko đổi (nhưng vẫn phải re-initialize vì đây là Reference)
  const expensiveFnResult = useMemo(() => {
    value: 'I am an object that was created by a expensive fn';
  }, []);

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

  //? Router
  const navigate = useNavigate(); // <button> line 102

  // Hoạt động tương tự useState nhưng ko log searchParams dc, đọc các method của searchParams ở https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const [searchParams, setSearchParams] = useSearchParams(); // input line 100
  const handleChange = (event) => {
    const { name, id } = event.target;
    setSearchParams({ [name]: id }); // { 'sort': 'asc' }
    //! Multi searchParams: ?sort=asc&category=shirt&category=pants
    setSearchParams({ sort: 'asc', category: ['shirt', 'pants'] });
    console.log(searchParams.get('category')); // 'shirt'
    console.log(searchParams.getAll('category')); // ['shirt', 'pants']
  };

  //* location = { pathname:/products/2 , search: ?category=Clothes&sort=Asc } }
  const location = useLocation();

  return (
    //* ~ component dc wrap bởi <numberContext.Provider> sẽ dùng dc value = useContext() (Line 43)
    <numberContext.Provider value={{ num: n, fn }}>
      {['asc', 'desc'].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="sort"
            id={value}
            onChange={handleChange}
            checked={searchParams.get('sort') === value} // Mới vào trang thì checkbox sẽ dc check tương ứng với url
          />
          {value}
        </label>
      ))}
      //* navigate = useNavigate() - line 79; `replace: true` thì ko back dc
      <button onClick={() => navigate('/admin', { replace: true })}>
        Navigate qua Admin
      </button>
      <ReducerExample></ReducerExample>
      <div className="useCallback">
        <CallbackExample onClick={callbackButtonHandler}>
          Disabled sau 5s
        </CallbackExample>
        <h3>{num}</h3>
      </div>
      <ReduxComponent></ReduxComponent>
      <EventTarget></EventTarget>
      <Outlet /> //* Giống với props.children
      <br />
      /* #region */
      {/* <NewExpense /> */}
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

/* #region */
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
/* #endregion */

export default App;

const Links = () => {
  //! isActive dc cho sẵn
  return (
    <>
      <nav>
        <NavLink
          to="/products"
          className={({ isActive }) => isActive && 'active-nav'}
        >
          Products
        </NavLink>
        <NavLink
          to="/admin"
          style={({ isActive }) => {
            return {
              marginLeft: '10px',
              color: isActive ? 'turquoise' : '',
            };
          }}
        >
          Admin
        </NavLink>
      </nav>
    </>
  );
};
