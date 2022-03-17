//1 Ở Parent: Declare to use icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
//* Ở component dùng tới icon:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//1 Redux 3: Tất cả ~ component của App sẽ dc truy cập vào store - line 19
import { Provider } from "react-redux";
import store from "./Redux/store";

library.add(far, faStar, faUser, faTrash);
const n = 4;
const arr = [...Array(n).keys()]; // [0, 1, 2, 3, 4]

//1 Router 1: <Routes> cha chỉ render THE MOST SPECIFIC MATCH <Route>
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ScrollToTop /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* Index route: Khi dính Route cha nhưng trên URL chưa có Route con, giống như kiểu khi người dùng chưa chọn sản phẩm nào thì sẽ render ra dòng chữ "Hãy chọn sản phẩm" chẳng hạn  */}
            <Route index element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="products" element={<Products />}>
              <Route path=":id" element={<ProductDetail />} /> //* Params 1
            </Route>
            <Route path="*" element={"404 Not Found "} /> //! Ko match route nào
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

const Icons = () => {
  {
    arr.map((i) => (
      <span style={{ color: "#fbae00" }} key={arr.indexOf(i)}>
        <FontAwesomeIcon
          icon="fa-solid fa-user"
          style={{ color: "red" }}
          size="2xs" // 2xl
          rotation={90}
          flip="vertical" // both
          spin // pulse
        />
      </span>
    ));
  }
};
