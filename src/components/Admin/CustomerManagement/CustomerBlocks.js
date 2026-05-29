import React from "react";
import AppIcon from "../../AppIcon";

const CustomerBlocks = () => {
    const blocks = [
        { label: "Active Customers", value: "1,185", icon: "customers", color: "bg-blue-500" },
        { label: "New This Month", value: "42", icon: "plus", color: "bg-emerald-500" },
        { label: "Pending Reviews", value: "18", icon: "audit", color: "bg-amber-400" },
        { label: "Customer Balance", value: "$43,940", icon: "wallet", color: "bg-violet-500" },
    ];

    return (
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
    );
};

export default CustomerBlocks;
