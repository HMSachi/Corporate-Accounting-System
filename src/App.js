import { Provider } from 'react-redux';
import store from './store';
import Login from './layout/Login/Login';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
