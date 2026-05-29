import React from "react";

const AppIcon = ({ name, className = "h-4 w-4" }) => {
    const commonProps = {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
    };

    const icons = {
        dashboard: <><path d="M3 13h8V3H3z" /><path d="M13 21h8V11h-8z" /><path d="M13 3h8v6h-8z" /><path d="M3 21h8v-6H3z" /></>,
        customers: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
        suppliers: <><path d="M3 7h11v10H3z" /><path d="M14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
        accounts: <><path d="M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
        payable: <><path d="M6 2h9l5 5v15H6z" /><path d="M14 2v6h6" /><path d="M10 13h6" /><path d="M10 17h4" /></>,
        receivable: <><path d="M6 2l2 1 2-1 2 1 2-1 2 1 2-1v20l-2-1-2 1-2-1-2 1-2-1-2 1z" /><path d="M9 8h6" /><path d="M9 12h6" /><path d="M9 16h4" /></>,
        cash: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></>,
        ledger: <><path d="M4 5a3 3 0 0 1 3-3h13v18H7a3 3 0 0 0-3 3z" /><path d="M4 5v18" /><path d="M8 6h8" /></>,
        reports: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16V9" /><path d="M12 16V6" /><path d="M16 16v-4" /></>,
        users: <><circle cx="9" cy="8" r="4" /><path d="M3 21a6 6 0 0 1 12 0" /><circle cx="18" cy="17" r="3" /><path d="M18 13v8" /><path d="M14 17h8" /></>,
        audit: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-5" /></>,
        settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a8 8 0 0 0 .1-2l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1L15 5h-4l-.4 3.1a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.5a8 8 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 1.7 1L11 23h4l.4-3.1a7 7 0 0 0 1.7-1l2.4 1 2-3.4z" /></>,
        admin: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></>,
        search: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
        bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
        calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></>,
        menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
        logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5" /><path d="M21 12H9" /></>,
        plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
        invoice: <><path d="M7 3h10l3 3v15H7z" /><path d="M17 3v4h3" /><path d="M10 12h7" /><path d="M10 16h5" /></>,
        wallet: <><path d="M3 7h18v12H3z" /><path d="M16 12h5" /><circle cx="17" cy="13" r="1" /></>,
    };

    return <svg {...commonProps}>{icons[name] || icons.accounts}</svg>;
};

export default AppIcon;
