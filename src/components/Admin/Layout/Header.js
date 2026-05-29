import React from "react";
import AppIcon from "../../AppIcon";

const Header = ({ user }) => {
    return (
        <header className="flex min-h-12 items-center gap-3 border-b border-blue-800/40 bg-gradient-to-r from-sky-600 via-blue-700 to-blue-950 px-4 text-white shadow-md shadow-blue-950/10">
            <button className="flex h-8 w-8 items-center justify-center rounded-md text-white hover:bg-white/15" type="button">
                <AppIcon name="menu" />
            </button>

            <div className="flex h-8 w-full max-w-md items-center gap-2 rounded-md border border-white/35 bg-white/95 px-3 text-slate-500 shadow-sm">
                <input className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-slate-400" type="search" placeholder="Search for modules, reports..." />
                <AppIcon name="search" className="h-3.5 w-3.5" />
            </div>

            <div className="ml-auto hidden items-center gap-4 md:flex">
                <button className="relative flex h-8 w-8 items-center justify-center rounded-md text-white hover:bg-white/15" type="button">
                    <AppIcon name="bell" />
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-400 ring-2 ring-white"></span>
                </button>

                <div className="flex items-center gap-2 text-xs text-blue-50">
                    <AppIcon name="calendar" className="h-4 w-4" />
                    <div>
                        <strong className="block text-white">May 15, 2025</strong>
                        <span className="block text-[11px] text-blue-100">Thursday</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/25 text-white ring-1 ring-white/30">
                        <AppIcon name="users" className="h-4 w-4" />
                    </span>
                    <div>
                        <strong className="block text-white">{user?.name || "Admin User"}</strong>
                        <span className="block text-[11px] text-blue-100">{user?.role || "Administrator"}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
