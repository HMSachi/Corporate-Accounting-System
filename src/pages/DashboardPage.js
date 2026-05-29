import React from "react";
import AppIcon from "../components/AppIcon";

const DashboardPage = ({ onPageChange }) => {
    const summaryCards = [
        { label: "Total Revenue", value: "$ 125,430.00", trend: "12.5% vs last month", icon: "wallet", color: "bg-blue-500", trendColor: "text-emerald-600" },
        { label: "Total Expenses", value: "$ 75,230.00", trend: "3.6% vs last month", icon: "payable", color: "bg-emerald-500", trendColor: "text-rose-600" },
        { label: "Total Profit", value: "$ 50,200.00", trend: "8.9% vs last month", icon: "cash", color: "bg-violet-500", trendColor: "text-emerald-600" },
        { label: "Total Customers", value: "1,250", trend: "5.2% vs last month", icon: "customers", color: "bg-amber-400", trendColor: "text-emerald-600" },
    ];

    const quickAccess = [
        { key: "customers", label: "Customer Management", icon: "customers", color: "bg-blue-500" },
        { key: "suppliers", label: "Supplier Management", icon: "suppliers", color: "bg-emerald-500" },
        { key: "payable", label: "Accounts Payable", icon: "payable", color: "bg-amber-400" },
        { key: "receivable", label: "Accounts Receivable", icon: "receivable", color: "bg-teal-500" },
        { key: "cash", label: "Cash Management", icon: "cash", color: "bg-indigo-500" },
        { key: "ledger", label: "General Ledger (GL)", icon: "ledger", color: "bg-violet-500" },
        { key: "reports", label: "Reports", icon: "reports", color: "bg-rose-500" },
        { key: "users", label: "User Management", icon: "users", color: "bg-blue-500" },
        { key: "audit", label: "Audit Logs", icon: "audit", color: "bg-yellow-700" },
        { key: "settings", label: "Settings", icon: "settings", color: "bg-slate-500" },
    ];

    const transactions = [
        ["15 May 2025", "VCH-10045", "Sales Invoice", "$2,450.00"],
        ["15 May 2025", "VCH-10044", "Purchase Invoice", "$1,250.00"],
        ["14 May 2025", "VCH-10043", "Payment Received", "$3,200.00"],
        ["14 May 2025", "VCH-10042", "Payment Made", "$1,100.00"],
    ];

    return (
        <div className="space-y-3">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

            <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map((card) => (
                    <article className="flex min-h-[76px] items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm" key={card.label}>
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${card.color}`}>
                            <AppIcon name={card.icon} className="h-4 w-4" />
                        </span>
                        <div>
                            <p className="text-xs font-bold text-slate-500">{card.label}</p>
                            <strong className="block text-lg font-bold text-slate-950">{card.value}</strong>
                            <span className={`text-[11px] font-bold ${card.trendColor}`}>{card.trend}</span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <h2 className="text-base font-bold text-slate-950">Quick Access</h2>
                <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
                    {quickAccess.map((item) => (
                        <button
                            className="flex min-h-[56px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 text-left text-xs font-bold shadow-sm hover:border-blue-300 hover:bg-blue-50"
                            key={item.key}
                            onClick={() => onPageChange(item.key)}
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

            <section className="grid grid-cols-1 gap-3 xl:grid-cols-[1fr_1.35fr_1fr]">
                <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-slate-950">Income vs Expense</h2>
                        <button className="rounded-md border border-slate-200 px-2 py-1 text-xs font-bold text-slate-600">This Month</button>
                    </div>
                    <div className="mt-3 flex h-36 items-end justify-between gap-3 border-b border-slate-200 px-2">
                        {[72, 84, 66, 78, 92].map((height, index) => (
                            <div className="flex h-full items-end gap-1" key={height}>
                                <span className="w-3 rounded-t bg-blue-500" style={{ height: `${height}%` }}></span>
                                <span className="w-3 rounded-t bg-rose-500" style={{ height: `${height - 24}%` }}></span>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-slate-950">Recent Transactions</h2>
                        <button className="rounded-md border border-slate-200 px-2 py-1 text-xs font-bold text-blue-600">View All</button>
                    </div>
                    <table className="mt-2 w-full border-collapse text-xs">
                        <thead>
                            <tr className="text-left text-slate-500">
                                <th className="border-b border-slate-100 px-2 py-2">Date</th>
                                <th className="border-b border-slate-100 px-2 py-2">Voucher No.</th>
                                <th className="border-b border-slate-100 px-2 py-2">Description</th>
                                <th className="border-b border-slate-100 px-2 py-2">Amount</th>
                                <th className="border-b border-slate-100 px-2 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction[1]}>
                                    <td className="border-b border-slate-100 px-2 py-2">{transaction[0]}</td>
                                    <td className="border-b border-slate-100 px-2 py-2">{transaction[1]}</td>
                                    <td className="border-b border-slate-100 px-2 py-2">{transaction[2]}</td>
                                    <td className="border-b border-slate-100 px-2 py-2">{transaction[3]}</td>
                                    <td className="border-b border-slate-100 px-2 py-2"><span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">Completed</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

                <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <h2 className="text-base font-bold text-slate-950">Top Expenses</h2>
                    <div className="mt-4 flex items-center gap-4">
                        <div className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-[conic-gradient(#3b82f6_0_24%,#f43f5e_24%_46%,#f59e0b_46%_60%,#22c55e_60%_87%,#6366f1_87%_100%)]">
                            <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-center">
                                <strong className="text-xs">$75,230</strong>
                            </div>
                        </div>
                        <div className="grid gap-2 text-xs text-slate-600">
                            <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></i>Rent</span>
                            <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-rose-500"></i>Purchase</span>
                            <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-500"></i>Utilities</span>
                            <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></i>Salaries</span>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default DashboardPage;
