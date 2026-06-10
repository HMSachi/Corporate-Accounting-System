import React from "react";
import { useTranslation } from 'react-i18next';
import AppIcon from "../../AppIcon";

const Header = ({ user }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <header className="flex min-h-12 items-center gap-4 border-b border-[#1359c4] bg-[#1c64d8] px-4 text-white shadow-[0_2px_10px_rgba(28,100,216,0.22)]">
            <button className="flex h-8 w-8 items-center justify-center rounded-md text-blue-100 hover:bg-white/10 hover:text-white" type="button">
                <AppIcon name="menu" />
            </button>

            <div className="flex h-8 w-full max-w-md items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 text-blue-100 shadow-sm">
                <input className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-blue-100/75" type="search" placeholder={t('search_placeholder')} />
                <AppIcon name="search" className="h-3.5 w-3.5 text-blue-100" />
            </div>

            {/* Language Toggle */}
            <div className="ml-4 flex items-center gap-2 text-xs font-semibold">
                <button 
                    onClick={() => changeLanguage('en')} 
                    className={`rounded px-2 py-1 ${i18n.language === 'en' ? 'bg-white text-[#1c64d8]' : 'text-blue-100 hover:bg-white/10'}`}
                >
                    EN
                </button>
                <button 
                    onClick={() => changeLanguage('si')} 
                    className={`rounded px-2 py-1 ${i18n.language === 'si' ? 'bg-white text-[#1c64d8]' : 'text-blue-100 hover:bg-white/10'}`}
                >
                    සිං
                </button>
            </div>

            <div className="ml-auto hidden items-center md:flex">
                <div className="flex min-w-[170px] items-center gap-3 rounded-full bg-white/10 px-3 py-1.5 text-xs ring-1 ring-white/15">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/25">
                        <AppIcon name="users" className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                        <strong className="block text-white">{user?.name || "Admin User"}</strong>
                        <span className="block text-[11px] text-blue-100/80">{user?.role || "Administrator"}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
