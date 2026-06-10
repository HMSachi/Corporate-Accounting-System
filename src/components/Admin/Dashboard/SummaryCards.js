import React from "react";
import { useTranslation } from "react-i18next";
import AppIcon from "../../AppIcon";

const SummaryCards = () => {
    const { t } = useTranslation();
    const summaryCards = [
        { label: "Total Revenue", value: "Rs. 125,430.00", trendValue: "12.5%", icon: "wallet", cardColor: "bg-blue-50/55 border-blue-100", iconColor: "bg-[#3b82f6] text-white", trendColor: "text-emerald-600" },
        { label: "Total Expenses", value: "Rs. 75,230.00", trendValue: "3.6%", icon: "cash", cardColor: "bg-emerald-50/55 border-emerald-100", iconColor: "bg-[#3fbf6b] text-white", trendColor: "text-rose-500" },
        { label: "Total Profit", value: "Rs. 50,200.00", trendValue: "8.9%", icon: "wallet", cardColor: "bg-violet-50/55 border-violet-100", iconColor: "bg-[#9b4de0] text-white", trendColor: "text-emerald-600" },
        { label: "Total Customers", value: "1,250", trendValue: "5.2%", icon: "customers", cardColor: "bg-orange-50/60 border-orange-100", iconColor: "bg-[#f5ae3d] text-white", trendColor: "text-emerald-600" },
    ];

    return (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
                <article className={`flex min-h-[84px] items-center gap-3 rounded-lg border p-4 shadow-sm ${card.cardColor}`} key={card.label}>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm ${card.iconColor}`}>
                        <AppIcon name={card.icon} className="h-4 w-4" />
                    </span>
                    <div>
                        <p className="text-xs font-normal text-slate-500">{t(card.label)}</p>
                        <strong className="block text-lg font-normal text-slate-950">{card.value}</strong>
                        <span className={`text-[11px] font-normal ${card.trendColor}`}>{t("vs_last_month", { value: card.trendValue })}</span>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default SummaryCards;
