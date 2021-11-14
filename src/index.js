import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Router/Home';
import Admin from './Router/Admin';
import Products from './Router/Products';
import ProductDetail from './Router/ProductDetail';

//? Ở Parent: Declare to use icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faStar, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(far, faStar, faUser, faTrash);
//* Ở component dùng tới icon:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const n = 4;
const arr = [...Array(n).keys()]; // [0, 1, 2, 3, 4]

//? Redux 3: Tất cả ~ component của App sẽ dc truy cập vào store
import store from './Redux/store';
import { Provider } from 'react-redux';
//? Router 1: Một <Routes> cha đứng đầu, chỉ render ONE BEST MATCHED <ROUTE>
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* Index route: Khi dính parent nhưng ko children nào match */}
            <Route index element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="products" element={<Products />}>
              <Route path=":id" element={<ProductDetail />} /> //* Params 1
            </Route>
            <Route path="*" element={'404 Not Found '} /> //! Ko match route nào
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const Icons = () => {
  {
    arr.map((i) => (
      <span style={{ color: '#fbae00' }} key={arr.indexOf(i)}>
        <FontAwesomeIcon
          icon="fa-solid fa-user"
          style={{ color: 'red' }}
          size="2xs" // 2xl
          rotation={90}
          flip="vertical" // both
          spin // pulse
        />
      </span>
    ));
  }
};
