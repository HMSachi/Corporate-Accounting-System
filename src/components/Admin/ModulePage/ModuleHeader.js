import React from "react";
import AppIcon from "../../AppIcon";

const ModuleHeader = ({ module }) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 className="page-title">{module.title}</h1>
                <p className="mt-1 text-xs text-slate-500">{module.description}</p>
            </div>
            <button className="flex h-8 items-center gap-2 rounded-md bg-blue-600 px-3 text-xs font-normal text-white shadow-sm hover:bg-blue-700" type="button">
                <AppIcon name="plus" className="h-3.5 w-3.5" />
                {module.action}
            </button>
        </div>
    );
};

export default ModuleHeader;
