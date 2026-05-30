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
import ModulePage from './layout/Admin/ModulePage/ModulePage';
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
            <Route path="/admin/supplier-management" element={<ModulePage moduleKey="supplier-management" />} />
            <Route path="/admin/accounts" element={<ModulePage moduleKey="accounts" />} />
            <Route path="/admin/accounts-payable" element={<ModulePage moduleKey="accounts-payable" />} />
            <Route path="/admin/accounts-receivable" element={<ModulePage moduleKey="accounts-receivable" />} />
            <Route path="/admin/cash-management" element={<ModulePage moduleKey="cash-management" />} />
            <Route path="/admin/general-ledger" element={<ModulePage moduleKey="general-ledger" />} />
            <Route path="/admin/reports" element={<ModulePage moduleKey="reports" />} />
            <Route path="/admin/user-management" element={<ModulePage moduleKey="user-management" />} />
            <Route path="/admin/audit-logs" element={<ModulePage moduleKey="audit-logs" />} />
            <Route path="/admin/settings" element={<ModulePage moduleKey="settings" />} />
            <Route path="/admin/system-administration" element={<ModulePage moduleKey="system-administration" />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
