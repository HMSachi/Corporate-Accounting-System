import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import store from './store';
import Layout from './layout/Layout';
import Login from './layout/Login/Login';
import Dashboard from './layout/Admin/Dashboard/Dashboard';
import CustomerManagement from './layout/Admin/CustomerManagement/CustomerManagement';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/customer-management" element={<CustomerManagement />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
