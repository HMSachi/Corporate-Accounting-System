import React from "react";
import AppIcon from "./AppIcon";

const HeaderComponent = ({ user }) => {
    return (
        <header className="flex min-h-12 items-center gap-3 border-b border-slate-200 bg-white px-4 shadow-sm">
            <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100">
                <AppIcon name="menu" />
            </button>

            <div className="flex h-8 w-full max-w-md items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 text-slate-500">
                <input className="min-w-0 flex-1 bg-transparent text-xs outline-none" type="search" placeholder="Search for modules, reports..." />
                <AppIcon name="search" className="h-3.5 w-3.5" />
            </div>

            <div className="ml-auto hidden items-center gap-4 md:flex">
                <button className="relative flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100">
                    <AppIcon name="bell" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                    <AppIcon name="calendar" className="h-4 w-4" />
                    <div>
                        <strong className="block text-slate-800">May 15, 2025</strong>
                        <span className="block text-[11px]">Thursday</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                        <AppIcon name="users" className="h-4 w-4" />
                    </span>
                    <div>
                        <strong className="block text-slate-800">{user?.name || "Admin User"}</strong>
                        <span className="block text-[11px] text-slate-500">{user?.role || "Administrator"}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
