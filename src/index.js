import ReactDOM from 'react-dom';

import './index.css';
import NewExpense from './components/NewExpense/NewExpense';
import App from './App';

import Greeting from './Storage/Conditional';
import Example from './Storage/Effect-hook';

// Dùng "" cho string, dùng {} cho expression
ReactDOM.render(
  [<App />, <Greeting isLoggedIn="" />, <Example />],
  document.getElementById('root')
);
