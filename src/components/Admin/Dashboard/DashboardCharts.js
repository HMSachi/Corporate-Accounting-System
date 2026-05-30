import React from "react";

const DashboardCharts = () => {
    const transactions = [
        ["15 May 2025", "VCH-10045", "Sales Invoice", "Rs. 2,450.00"],
        ["15 May 2025", "VCH-10044", "Purchase Invoice", "Rs. 1,250.00"],
        ["14 May 2025", "VCH-10043", "Payment Received", "Rs. 3,200.00"],
        ["14 May 2025", "VCH-10042", "Payment Made", "Rs. 1,100.00"],
    ];

    return (
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_1.35fr_1fr]">
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-normal text-slate-950">Income vs Expense</h2>
                    <button className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-normal text-slate-600" type="button">This Month</button>
                </div>
                <div className="mt-3 flex h-36 items-end justify-between gap-3 border-b border-slate-200 px-2">
                    {[72, 84, 66, 78, 92].map((height) => (
                        <div className="flex h-full items-end gap-1" key={height}>
                            <span className="w-3 rounded-t bg-blue-300" style={{ height: `${height}%` }}></span>
                            <span className="w-3 rounded-t bg-rose-300" style={{ height: `${height - 24}%` }}></span>
                        </div>
                    ))}
                </div>
            </article>

            <article className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-normal text-slate-950">Recent Transactions</h2>
                    <button className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-normal text-slate-600" type="button">View All</button>
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
                                <td className="border-b border-slate-100 px-2 py-2"><span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-normal text-emerald-600">Completed</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h2 className="text-base font-normal text-slate-950">Top Expenses</h2>
                <div className="mt-4 flex items-center gap-4">
                    <div className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-[conic-gradient(#93c5fd_0_24%,#fca5a5_24%_46%,#fde68a_46%_60%,#86efac_60%_87%,#c4b5fd_87%_100%)]">
                        <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-center">
                            <strong className="text-xs font-normal">Rs. 75,230</strong>
                        </div>
                    </div>
                    <div className="grid gap-2 text-xs text-slate-600">
                        <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-300"></i>Rent</span>
                        <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-rose-300"></i>Purchase</span>
                        <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-300"></i>Utilities</span>
                        <span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300"></i>Salaries</span>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default DashboardCharts;
