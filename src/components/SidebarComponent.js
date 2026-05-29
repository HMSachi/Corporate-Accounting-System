import React from "react";
import AppIcon from "./AppIcon";

const SidebarComponent = ({ activePage, onPageChange }) => {
    const sidebarItems = [
        { key: "dashboard", label: "Dashboard", icon: "dashboard" },
        { key: "customers", label: "Customer Management", icon: "customers" },
        { key: "suppliers", label: "Supplier Management", icon: "suppliers" },
        { key: "accounts", label: "Accounts", icon: "accounts" },
        { key: "payable", label: "Accounts Payable", icon: "payable" },
        { key: "receivable", label: "Accounts Receivable", icon: "receivable" },
        { key: "cash", label: "Cash Management", icon: "cash" },
        { key: "ledger", label: "General Ledger (GL)", icon: "ledger" },
        { key: "reports", label: "Reports", icon: "reports" },
        { key: "users", label: "User Management", icon: "users" },
        { key: "audit", label: "Audit Logs", icon: "audit" },
        { key: "settings", label: "Settings", icon: "settings" },
        { key: "admin", label: "System Administration", icon: "admin" },
    ];

    return (
        <aside className="flex min-h-screen w-[200px] shrink-0 flex-col bg-gradient-to-b from-blue-800 to-slate-950 p-2 text-xs text-blue-50">
            <div className="mb-2 flex min-h-10 items-center gap-2 px-2 font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white">
                    <AppIcon name="reports" className="h-4 w-4" />
                </span>
                <span>Corporate Accounting</span>
            </div>

            <nav className="grid gap-1">
                {sidebarItems.map((item) => (
                    <button
                        className={`flex min-h-[30px] items-center gap-2 rounded-md px-2 text-left text-xs transition ${
                            activePage === item.key ? "bg-blue-500 text-white" : "text-blue-50 hover:bg-blue-700/80"
                        }`}
                        key={item.key}
                        onClick={() => onPageChange(item.key)}
                        type="button"
                    >
                        <AppIcon name={item.icon} className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{item.label}</span>
                    </button>
                ))}
            </nav>

            <button className="mt-auto flex min-h-[30px] items-center gap-2 rounded-md px-2 text-left text-xs text-blue-50 hover:bg-blue-700/80">
                <AppIcon name="logout" className="h-3.5 w-3.5" />
                Sign Out
            </button>
        </aside>
    );
};

export default SidebarComponent;
