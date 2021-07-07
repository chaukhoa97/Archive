import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import Greeting from './Storage/Conditional';
import Example from './Storage/Effect-hook';

ReactDOM.render(
  // Dùng "" cho string, dùng {} cho expression
  [<App />, <Greeting isLoggedIn="" />, <Example />],
  document.getElementById('root')
);
