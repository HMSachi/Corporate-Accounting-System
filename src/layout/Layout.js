import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Admin/Layout/Header";
import Sidebar from "../components/Admin/Layout/Sidebar";

const Layout = ({ children }) => {
    const location = useLocation();
    const { user } = useSelector((state) => state.login);
    const isLoginPage = location.pathname === "/login" || location.pathname === "/";
    const isAdminPath = location.pathname.startsWith("/admin");

    return (
        <div className={`min-h-screen bg-[#f4f8fc] font-sans text-xs text-slate-800 ${isAdminPath ? "flex" : ""}`}>
            {!isLoginPage && isAdminPath && <Sidebar />}

            <div className="min-w-0 flex-1">
                {!isLoginPage && isAdminPath && <Header user={user} />}
                <main className={isAdminPath ? "p-4" : ""}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
