import React from "react";
import AppIcon from "../../AppIcon";

const CustomerActionsPanel = () => {
    const actions = [
        ["New customer registration", "customers"],
        ["Customer account statement", "invoice"],
        ["Balance adjustment", "wallet"],
        ["KYC and audit review", "audit"],
    ];

    return (
        <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <h2 className="text-base font-bold text-slate-950">Customer Actions</h2>
            <div className="mt-3 grid gap-2">
                {actions.map(([label, icon]) => (
                    <button className="flex min-h-[42px] items-center gap-3 rounded-lg border border-slate-200 px-3 text-left text-xs font-bold hover:border-blue-300 hover:bg-blue-50" key={label} type="button">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                            <AppIcon name={icon} className="h-3.5 w-3.5" />
                        </span>
                        {label}
                    </button>
                ))}
            </div>
        </article>
    );
};

export default CustomerActionsPanel;
