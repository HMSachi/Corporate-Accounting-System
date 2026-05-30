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
import SupplierManagement from './layout/Admin/SupplierManagement/SupplierManagement';
import Accounts from './layout/Admin/Accounts/Accounts';
import AccountsPayable from './layout/Admin/AccountsPayable/AccountsPayable';
import AccountsReceivable from './layout/Admin/AccountsReceivable/AccountsReceivable';
import CashManagement from './layout/Admin/CashManagement/CashManagement';
import GeneralLedger from './layout/Admin/GeneralLedger/GeneralLedger';
import Reports from './layout/Admin/Reports/Reports';
import UserManagement from './layout/Admin/UserManagement/UserManagement';
import AuditLogs from './layout/Admin/AuditLogs/AuditLogs';
import Settings from './layout/Admin/Settings/Settings';
import SystemAdministration from './layout/Admin/SystemAdministration/SystemAdministration';
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
            <Route path="/admin/supplier-management" element={<SupplierManagement />} />
            <Route path="/admin/accounts" element={<Accounts />} />
            <Route path="/admin/accounts-payable" element={<AccountsPayable />} />
            <Route path="/admin/accounts-receivable" element={<AccountsReceivable />} />
            <Route path="/admin/cash-management" element={<CashManagement />} />
            <Route path="/admin/general-ledger" element={<GeneralLedger />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/user-management" element={<UserManagement />} />
            <Route path="/admin/audit-logs" element={<AuditLogs />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/system-administration" element={<SystemAdministration />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
