import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Greeting from './Storage/Conditional';

ReactDOM.render(
  // Dùng "" cho string, dùng {} cho expression
  [<App />, <Greeting isLoggedIn="" />],
  document.getElementById('root')
);
