import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
ReactDOM.render(
  //? Redux 4: Tất cả ~ component của App sẽ dc truy cập vào store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
