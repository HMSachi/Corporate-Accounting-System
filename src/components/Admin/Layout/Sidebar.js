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
        <aside className="flex min-h-screen w-[250px] shrink-0 flex-col bg-gradient-to-b from-sky-600 via-blue-700 to-blue-950 p-4 text-xs text-blue-50 shadow-xl shadow-blue-950/20">
            <div className="mb-2 flex min-h-10 items-center gap-2 px-2 font-bold">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white shadow-sm ring-1 ring-white/25">
                    <AppIcon name="reports" className="h-4 w-4" />
                </span>
                <span>Corporate Accounting</span>
            </div>

            <nav className="grid gap-1.5">
                {sidebarItems.map((item) => (
                    <NavLink
                        className={({ isActive }) => `flex min-h-[30px] items-center gap-2 rounded-md px-2 text-left text-xs transition ${
                            isActive ? "bg-white/20 text-white shadow-sm ring-1 ring-white/25" : "text-blue-50 hover:bg-white/10 hover:ring-1 hover:ring-white/10"
                        }`}
                        key={item.path}
                        to={item.path}
                    >
                        <AppIcon name={item.icon} className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <NavLink className="mt-auto flex min-h-[30px] items-center gap-2 rounded-md px-2 text-left text-xs text-blue-50 hover:bg-white/15" to="/login">
                <AppIcon name="logout" className="h-3.5 w-3.5" />
                Sign Out
            </NavLink>
        </aside>
    );
};

export default Sidebar;
