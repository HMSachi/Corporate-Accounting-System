import React from "react";
import { useNavigate } from "react-router-dom";
import AppIcon from "../../AppIcon";

const QuickAccess = () => {
    const navigate = useNavigate();
    const quickAccess = [
        { path: "/admin/customer-management", label: "Customer Management", icon: "customers", color: "bg-[#3b82f6] text-white" },
        { path: "/admin/supplier-management", label: "Supplier Management", icon: "users", color: "bg-[#3fbf6b] text-white" },
        { path: "/admin/accounts-payable", label: "Accounts Payable", icon: "payable", color: "bg-[#f5a53d] text-white" },
        { path: "/admin/accounts-receivable", label: "Accounts Receivable", icon: "receivable", color: "bg-[#4bc0ad] text-white" },
        { path: "/admin/cash-management", label: "Cash Management", icon: "cash", color: "bg-[#6554e8] text-white" },
        { path: "/admin/general-ledger", label: "General Ledger (GL)", icon: "ledger", color: "bg-[#9b4de0] text-white" },
        { path: "/admin/reports", label: "Reports", icon: "reports", color: "bg-[#f0525f] text-white" },
        { path: "/admin/user-management", label: "User Management", icon: "users", color: "bg-[#2f76d2] text-white" },
        { path: "/admin/audit-logs", label: "Audit Logs", icon: "audit", color: "bg-[#bd9254] text-white" },
        { path: "/admin/settings", label: "Settings", icon: "settings", color: "bg-[#748398] text-white" },
    ];

    return (
        <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-[0_1px_3px_rgba(15,23,42,0.04)] ring-1 ring-white">
            <h2 className="text-base font-bold text-slate-950">Quick Access</h2>
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
                {quickAccess.map((item) => (
                    <button
                        className="flex min-h-[64px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-left text-xs font-bold text-slate-800 shadow-[0_2px_8px_rgba(31,115,238,0.06)] transition hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-[0_6px_16px_rgba(31,115,238,0.1)]"
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        type="button"
                    >
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm ${item.color}`}>
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
