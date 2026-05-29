import React from "react";
import AppIcon from "../../AppIcon";

const SummaryCards = () => {
    const summaryCards = [
        { label: "Total Revenue", value: "$ 125,430.00", trend: "12.5% vs last month", icon: "wallet", color: "bg-blue-500", trendColor: "text-emerald-600" },
        { label: "Total Expenses", value: "$ 75,230.00", trend: "3.6% vs last month", icon: "payable", color: "bg-emerald-500", trendColor: "text-rose-600" },
        { label: "Total Profit", value: "$ 50,200.00", trend: "8.9% vs last month", icon: "cash", color: "bg-violet-500", trendColor: "text-emerald-600" },
        { label: "Total Customers", value: "1,250", trend: "5.2% vs last month", icon: "customers", color: "bg-amber-400", trendColor: "text-emerald-600" },
    ];

    return (
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
                <article className="flex min-h-[76px] items-center gap-3 rounded-lg border border-slate-200/80 bg-white/80 p-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-white" key={card.label}>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${card.color}`}>
                        <AppIcon name={card.icon} className="h-3.5 w-3.5" />
                    </span>
                    <div>
                        <p className="text-xs font-bold text-slate-500">{card.label}</p>
                        <strong className="block text-lg font-bold text-slate-950">{card.value}</strong>
                        <span className={`text-[11px] font-bold ${card.trendColor}`}>{card.trend}</span>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default SummaryCards;
