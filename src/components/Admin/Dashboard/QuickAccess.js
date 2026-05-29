import React from "react";
import { useNavigate } from "react-router-dom";
import AppIcon from "../../AppIcon";

const QuickAccess = () => {
    const navigate = useNavigate();
    const quickAccess = [
        { path: "/admin/customer-management", label: "Customer Management", icon: "customers", color: "bg-blue-500" },
        { path: "/admin/supplier-management", label: "Supplier Management", icon: "suppliers", color: "bg-emerald-500" },
        { path: "/admin/accounts-payable", label: "Accounts Payable", icon: "payable", color: "bg-amber-400" },
        { path: "/admin/accounts-receivable", label: "Accounts Receivable", icon: "receivable", color: "bg-teal-500" },
        { path: "/admin/cash-management", label: "Cash Management", icon: "cash", color: "bg-indigo-500" },
        { path: "/admin/general-ledger", label: "General Ledger (GL)", icon: "ledger", color: "bg-violet-500" },
        { path: "/admin/reports", label: "Reports", icon: "reports", color: "bg-rose-500" },
        { path: "/admin/user-management", label: "User Management", icon: "users", color: "bg-blue-500" },
        { path: "/admin/audit-logs", label: "Audit Logs", icon: "audit", color: "bg-yellow-700" },
        { path: "/admin/settings", label: "Settings", icon: "settings", color: "bg-slate-500" },
    ];

    return (
        <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <h2 className="text-base font-bold text-slate-950">Quick Access</h2>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
                {quickAccess.map((item) => (
                    <button
                        className="flex min-h-[56px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 text-left text-xs font-bold shadow-sm hover:border-blue-300 hover:bg-blue-50"
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        type="button"
                    >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${item.color}`}>
                            <AppIcon name={item.icon} className="h-4 w-4" />
                        </span>
                        {item.label}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default QuickAccess;
