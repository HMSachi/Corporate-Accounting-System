import React from "react";
import { useTranslation } from "react-i18next";
import AppIcon from "../../AppIcon";

const CustomerTable = ({ customers, isLoading, error }) => {
    const { t } = useTranslation();
    return (
        <article className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-normal text-slate-950">{t("Customer List")}</h2>
                <div className="flex h-8 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 text-slate-500">
                    <input className="bg-transparent text-xs outline-none" placeholder={t("Search customers")} />
                    <AppIcon name="search" className="h-3.5 w-3.5" />
                </div>
            </div>

            {isLoading && <p className="text-xs text-slate-500">Loading customers...</p>}
            {error && <p className="text-xs font-bold text-rose-600">{error}</p>}

            <table className="w-full border-collapse text-xs">
                <thead>
                    <tr className="text-left text-slate-500">
                        <th className="border-b border-slate-100 px-2 py-2">{t("Customer ID")}</th>
                        <th className="border-b border-slate-100 px-2 py-2">{t("Name")}</th>
                        <th className="border-b border-slate-100 px-2 py-2">{t("Type")}</th>
                        <th className="border-b border-slate-100 px-2 py-2">{t("Balance")}</th>
                        <th className="border-b border-slate-100 px-2 py-2">{t("Status")}</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td className="border-b border-slate-100 px-2 py-2 font-normal text-slate-800">{customer.id}</td>
                            <td className="border-b border-slate-100 px-2 py-2">{customer.name}</td>
                            <td className="border-b border-slate-100 px-2 py-2">{customer.type}</td>
                            <td className="border-b border-slate-100 px-2 py-2 font-normal">{customer.balance}</td>
                            <td className="border-b border-slate-100 px-2 py-2">
                                <span className={`rounded-full px-2 py-1 text-[11px] font-normal ${
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
    );
};

export default CustomerTable;
