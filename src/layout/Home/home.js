import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import SidebarComponent from "../../components/SidebarComponent";
import CustomerManagementPage from "../../pages/CustomerManagementPage";
import DashboardPage from "../../pages/DashboardPage";

const Home = ({ user }) => {
    const [activePage, setActivePage] = useState("dashboard");

    const renderPage = () => {
        if (activePage === "customers") {
            return <CustomerManagementPage />;
        }

        return <DashboardPage onPageChange={setActivePage} />;
    };

    return (
        <div className="flex min-h-screen bg-slate-100 font-sans text-xs text-slate-800">
            <SidebarComponent activePage={activePage} onPageChange={setActivePage} />
            <div className="min-w-0 flex-1">
                <HeaderComponent user={user} />
                <main className="p-4">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
};

export default Home;
