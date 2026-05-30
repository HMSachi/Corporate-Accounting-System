import React from "react";
import { NavLink } from "react-router-dom";
import AppIcon from "../../AppIcon";

const Sidebar = () => {
    const sidebarItems = [
        { path: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
        { path: "/admin/customer-management", label: "Customer Management", icon: "customers" },
        { path: "/admin/supplier-management", label: "Supplier Management", icon: "suppliers" },
        { path: "/admin/accounts", label: "Accounts", icon: "accounts" },
        { path: "/admin/accounts-payable", label: "Accounts Payable", icon: "payable" },
        { path: "/admin/accounts-receivable", label: "Accounts Receivable", icon: "receivable" },
        { path: "/admin/cash-management", label: "Cash Management", icon: "cash" },
        { path: "/admin/general-ledger", label: "General Ledger (GL)", icon: "ledger" },
        { path: "/admin/reports", label: "Reports", icon: "reports" },
        { path: "/admin/user-management", label: "User Management", icon: "users" },
        { path: "/admin/audit-logs", label: "Audit Logs", icon: "audit" },
        { path: "/admin/settings", label: "Settings", icon: "settings" },
        { path: "/admin/system-administration", label: "System Administration", icon: "admin" },
    ];

    return (
        <aside className="flex min-h-screen w-[250px] shrink-0 flex-col border-r border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-[0_0_18px_rgba(15,23,42,0.04)]">
            <div className="mb-2 flex min-h-10 items-center gap-2 px-2 font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 shadow-sm ring-1 ring-slate-200">
                    <AppIcon name="reports" className="h-4 w-4" />
                </span>
                <span className="text-slate-900">Corporate Accounting</span>
            </div>

            <nav className="grid gap-1.5">
                {sidebarItems.map((item) => (
                    <NavLink
                        className={({ isActive }) => `flex min-h-[30px] items-center gap-2 rounded-md px-2 text-left text-xs transition ${
                            isActive ? "bg-slate-100 text-slate-900 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                        key={item.path}
                        to={item.path}
                    >
                        <AppIcon name={item.icon} className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <NavLink className="mt-auto flex min-h-[30px] items-center gap-2 rounded-md px-2 text-left text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900" to="/login">
                <AppIcon name="logout" className="h-3.5 w-3.5" />
                Sign Out
            </NavLink>
        </aside>
    );
};

export default Sidebar;
