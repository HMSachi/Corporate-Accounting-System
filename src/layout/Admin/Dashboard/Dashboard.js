import React from "react";
import DashboardCharts from "../../../components/Admin/Dashboard/DashboardCharts";
import QuickAccess from "../../../components/Admin/Dashboard/QuickAccess";
import SummaryCards from "../../../components/Admin/Dashboard/SummaryCards";

const Dashboard = () => {
    return (
        <div className="space-y-3">
            <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
            <SummaryCards />
            <QuickAccess />
            <DashboardCharts />
        </div>
    );
};

export default Dashboard;
