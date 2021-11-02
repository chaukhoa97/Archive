import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

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
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {arr.map((i) => (
          <span style={{ color: '#fbae00' }} key={arr.indexOf(i)}>
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              size="2xs" // 2lg
              rotation={90}
              flip="vertical" // both
              spin // pulse
            />
          </span>
        ))}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
