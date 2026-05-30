import React from "react";
import AppIcon from "../../AppIcon";

const SummaryCards = () => {
    const summaryCards = [
        { label: "Total Revenue", value: "$ 125,430.00", trend: "12.5% vs last month", icon: "wallet", cardColor: "bg-blue-50/55 border-blue-100", iconColor: "bg-[#3b82f6] text-white", trendColor: "text-emerald-600" },
        { label: "Total Expenses", value: "$ 75,230.00", trend: "3.6% vs last month", icon: "cash", cardColor: "bg-emerald-50/55 border-emerald-100", iconColor: "bg-[#3fbf6b] text-white", trendColor: "text-rose-500" },
        { label: "Total Profit", value: "$ 50,200.00", trend: "8.9% vs last month", icon: "wallet", cardColor: "bg-violet-50/55 border-violet-100", iconColor: "bg-[#9b4de0] text-white", trendColor: "text-emerald-600" },
        { label: "Total Customers", value: "1,250", trend: "5.2% vs last month", icon: "customers", cardColor: "bg-orange-50/60 border-orange-100", iconColor: "bg-[#f5ae3d] text-white", trendColor: "text-emerald-600" },
    ];

    return (
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
                <article className={`flex min-h-[82px] items-center gap-3 rounded-lg border p-4 shadow-[0_2px_8px_rgba(31,115,238,0.08)] ring-1 ring-white ${card.cardColor}`} key={card.label}>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm ${card.iconColor}`}>
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
    );
};

export default SummaryCards;
