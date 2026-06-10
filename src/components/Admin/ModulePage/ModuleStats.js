import React from "react";
import { useTranslation } from "react-i18next";
import AppIcon from "../../AppIcon";

const ModuleStats = ({ module }) => {
    const { t } = useTranslation();
    return (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {module.stats.map(([label, value, color]) => (
                <article className="flex min-h-[78px] items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={label}>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${color}`}>
                        <AppIcon name={module.icon} className="h-3.5 w-3.5" />
                    </span>
                    <div>
                        <p className="text-xs font-normal text-slate-500">{t(label)}</p>
                        <strong className="block text-lg font-normal text-slate-950">{value}</strong>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default ModuleStats;
