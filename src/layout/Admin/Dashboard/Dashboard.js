import React from "react";
import DashboardCharts from "../../../components/Admin/Dashboard/DashboardCharts";
import QuickAccess from "../../../components/Admin/Dashboard/QuickAccess";
import SummaryCards from "../../../components/Admin/Dashboard/SummaryCards";

const Dashboard = () => {
    return (
        <div className="space-y-5">
            <h1 className="page-title">Dashboard</h1>
            <SummaryCards />
            <QuickAccess />
            <DashboardCharts />
        </div>
    );
};

export default Dashboard;
