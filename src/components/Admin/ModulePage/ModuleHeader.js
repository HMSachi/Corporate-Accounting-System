import React from "react";
import { useTranslation } from "react-i18next";
import AppIcon from "../../AppIcon";

const ModuleHeader = ({ module }) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 className="page-title">{t(module.title)}</h1>
                <p className="mt-1 text-xs text-slate-500">{t(module.description)}</p>
            </div>
            <button className="flex h-8 items-center gap-2 rounded-md bg-blue-600 px-3 text-xs font-normal text-white shadow-sm hover:bg-blue-700" type="button">
                <AppIcon name="plus" className="h-3.5 w-3.5" />
                {t(module.action)}
            </button>
        </div>
    );
};

export default ModuleHeader;
