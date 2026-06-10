import React from "react";
import { useTranslation } from "react-i18next";
import DashboardCharts from "../../../components/Admin/Dashboard/DashboardCharts";
import QuickAccess from "../../../components/Admin/Dashboard/QuickAccess";
import SummaryCards from "../../../components/Admin/Dashboard/SummaryCards";

const Dashboard = () => {
    const { t } = useTranslation();
    return (
        <div className="space-y-5">
            <h1 className="page-title">{t("Dashboard")}</h1>
            <SummaryCards />
            <QuickAccess />
            <DashboardCharts />
        </div>
    );
};

export default Dashboard;
