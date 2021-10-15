import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import './index.css';
ReactDOM.render(
  //? Redux 2: Tất cả ~ component của App sẽ dc truy cập vào store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
