import React from "react";
import AppIcon from "../../AppIcon";

const Header = ({ user }) => {
    return (
        <header className="flex min-h-12 items-center gap-4 border-b border-slate-200 bg-white px-4 text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700" type="button">
                <AppIcon name="menu" />
            </button>

            <div className="flex h-8 w-full max-w-md items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-slate-500 shadow-sm">
                <input className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-slate-400" type="search" placeholder="Search for modules, reports..." />
                <AppIcon name="search" className="h-3.5 w-3.5" />
            </div>

            <div className="ml-auto hidden items-center md:flex">
                <div className="flex min-w-[170px] items-center gap-3 rounded-full bg-slate-50 px-3 py-1.5 text-xs ring-1 ring-slate-200">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-1 ring-slate-200">
                        <AppIcon name="users" className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                        <strong className="block text-slate-900">{user?.name || "Admin User"}</strong>
                        <span className="block text-[11px] text-slate-500">{user?.role || "Administrator"}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
