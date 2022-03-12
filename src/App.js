import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import ReduxComponent from "./Redux/redux-component";
import { champActions } from "./Redux/slice2-action-creator";
import numberContext from "./Storage/Context/number-context";
import EventTarget from "./Storage/EventTarget";
import CallbackExample from "./Storage/useCallback";
import ReducerExample from "./Storage/useReducer";

function App() {
  //1 Context
  const n = 0;
  const fn = () => 1;

  //1 Side effect/Async code with Redux 1: Code ở trong Component (dùng useEffect). KO DC BỎ Ở TRONG reducer (vì reducerFn phải là pure)
  //* Redux store thay đổi -> App do có useSelector() sẽ dc re-render -> UI sẽ luôn dc update tương ứng với state
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(champActions.changeName({ name: "Vayne" }));
    const sendRequest = async () => {
      try {
        await fetch("https://react-http-6b4a6.firebaseio.com/cart.json");
        dispatch(champActions.changeSkin("Sieu pham"));
      } catch (error) {}
    };
    sendRequest();
  }, [dispatch]);

  //1 Router
  const navigate = useNavigate(); // <button> line 102

  // Hoạt động tương tự useState nhưng ko log searchParams dc, đọc các method của searchParams ở https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const [searchParams, setSearchParams] = useSearchParams(); // input line 58
  const handleChange = (event) => {
    const { name, id } = event.target;
    setSearchParams({ [name]: id }); // { 'sort': 'asc' }
    //! Multi searchParams: ?sort=asc&category=shirt&category=pants
    setSearchParams({ sort: "asc", category: ["shirt", "pants"] });
    console.log(searchParams.get("category")); // 'shirt'
    console.log(searchParams.getAll("category")); // ['shirt', 'pants']
  };

  //* location = { pathname:/products/2 , search: ?category=Clothes&sort=Asc } }
  const location = useLocation();

  return (
    //* ~ component dc wrap bởi <numberContext.Provider> sẽ dùng dc value = useContext() (Line 43)
    <numberContext.Provider value={{ num: n, fn }}>
      {["asc", "desc"].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="sort"
            id={value}
            onChange={handleChange}
            checked={searchParams.get("sort") === value} // Mới vào trang thì checkbox sẽ dc check tương ứng với url
          />
          {value}
        </label>
      ))}
      //* navigate = useNavigate() - line 79; `replace: true` thì ko back dc
      <button onClick={() => navigate("/admin", { replace: true })}>
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
    </numberContext.Provider>
    //! Context chỉ nên dc dùng cho ~ state ko thay đổi liên tục. Ngc lại thì dùng useState như bt
  );
}

export default App;

const Links = () => {
  //! isActive dc cho sẵn
  return (
    <>
      <nav>
        <NavLink
          to="/products"
          className={({ isActive }) => isActive && "active-nav"}
        >
          Products
        </NavLink>
        <NavLink
          to="/admin"
          style={({ isActive }) => {
            return {
              marginLeft: "10px",
              color: isActive ? "turquoise" : "",
            };
          }}
        >
          Admin
        </NavLink>
      </nav>
    </>
  );
};
