import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomers } from "../actions/CustomerAction";
import AppIcon from "../components/AppIcon";

const CustomerManagementPage = () => {
    const dispatch = useDispatch();
    const { customers, isLoading, error } = useSelector((state) => state.customer);

    useEffect(() => {
        dispatch(GetCustomers());
    }, [dispatch]);

    const blocks = [
        { label: "Active Customers", value: "1,185", icon: "customers", color: "bg-blue-500" },
        { label: "New This Month", value: "42", icon: "plus", color: "bg-emerald-500" },
        { label: "Pending Reviews", value: "18", icon: "audit", color: "bg-amber-400" },
        { label: "Customer Balance", value: "$43,940", icon: "wallet", color: "bg-violet-500" },
    ];

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Customer Management</h1>
                    <p className="mt-1 text-xs text-slate-500">Manage cooperative customers, balances, and account status.</p>
                </div>
                <button className="flex h-8 items-center gap-2 rounded-md bg-blue-600 px-3 text-xs font-bold text-white shadow-sm hover:bg-blue-700">
                    <AppIcon name="plus" className="h-3.5 w-3.5" />
                    Add Customer
                </button>
            </div>

            <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {blocks.map((block) => (
                    <article className="flex min-h-[72px] items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm" key={block.label}>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-full text-white ${block.color}`}>
                            <AppIcon name={block.icon} className="h-4 w-4" />
                        </span>
                        <div>
                            <p className="text-xs font-bold text-slate-500">{block.label}</p>
                            <strong className="block text-lg font-bold text-slate-950">{block.value}</strong>
                        </div>
                    </article>
                ))}
            </section>

            <section className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_0.8fr]">
                <article className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="text-base font-bold text-slate-950">Customer List</h2>
                        <div className="flex h-8 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 text-slate-500">
                            <input className="bg-transparent text-xs outline-none" placeholder="Search customers" />
                            <AppIcon name="search" className="h-3.5 w-3.5" />
                        </div>
                    </div>

                    {isLoading && <p className="text-xs text-slate-500">Loading customers...</p>}
                    {error && <p className="text-xs font-bold text-rose-600">{error}</p>}

                    <table className="w-full border-collapse text-xs">
                        <thead>
                            <tr className="text-left text-slate-500">
                                <th className="border-b border-slate-100 px-2 py-2">Customer ID</th>
                                <th className="border-b border-slate-100 px-2 py-2">Name</th>
                                <th className="border-b border-slate-100 px-2 py-2">Type</th>
                                <th className="border-b border-slate-100 px-2 py-2">Balance</th>
                                <th className="border-b border-slate-100 px-2 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td className="border-b border-slate-100 px-2 py-2 font-bold text-slate-800">{customer.id}</td>
                                    <td className="border-b border-slate-100 px-2 py-2">{customer.name}</td>
                                    <td className="border-b border-slate-100 px-2 py-2">{customer.type}</td>
                                    <td className="border-b border-slate-100 px-2 py-2 font-bold">{customer.balance}</td>
                                    <td className="border-b border-slate-100 px-2 py-2">
                                        <span className={`rounded-full px-2 py-1 text-[11px] font-bold ${
                                            customer.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                                        }`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

                <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                    <h2 className="text-base font-bold text-slate-950">Customer Actions</h2>
                    <div className="mt-3 grid gap-2">
                        {[
                            ["New customer registration", "customers"],
                            ["Customer account statement", "invoice"],
                            ["Balance adjustment", "wallet"],
                            ["KYC and audit review", "audit"],
                        ].map(([label, icon]) => (
                            <button className="flex min-h-[42px] items-center gap-3 rounded-lg border border-slate-200 px-3 text-left text-xs font-bold hover:border-blue-300 hover:bg-blue-50" key={label}>
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                                    <AppIcon name={icon} className="h-3.5 w-3.5" />
                                </span>
                                {label}
                            </button>
                        ))}
                    </div>
                </article>
            </section>
        </div>
    );
};

export default CustomerManagementPage;
