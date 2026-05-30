import React from "react";
import AppIcon from "../../../components/AppIcon";

const moduleContent = {
    "supplier-management": {
        title: "Supplier Management",
        description: "Manage vendors, payment terms, purchase balances, and supplier documents.",
        action: "Add Supplier",
        icon: "suppliers",
        stats: [
            ["Active Suppliers", "148", "bg-emerald-500"],
            ["Pending Orders", "32", "bg-amber-400"],
            ["Payable Balance", "$68,430", "bg-blue-500"],
            ["Overdue Bills", "9", "bg-rose-500"],
        ],
        columns: ["Supplier", "Category", "Balance", "Status"],
        rows: [
            ["Blue Ocean Supplies", "Raw Materials", "$12,480", "Active"],
            ["Metro Logistics", "Transport", "$8,120", "Pending"],
            ["Nova Office Mart", "Office Supplies", "$2,340", "Active"],
        ],
    },
    accounts: {
        title: "Accounts",
        description: "Review chart of accounts, account groups, opening balances, and account activity.",
        action: "Create Account",
        icon: "accounts",
        stats: [
            ["Asset Accounts", "24", "bg-blue-500"],
            ["Liability Accounts", "18", "bg-violet-500"],
            ["Income Accounts", "12", "bg-emerald-500"],
            ["Expense Accounts", "31", "bg-amber-400"],
        ],
        columns: ["Account Code", "Account Name", "Type", "Balance"],
        rows: [
            ["1001", "Cash in Hand", "Asset", "$18,500"],
            ["2004", "Supplier Payables", "Liability", "$68,430"],
            ["4002", "Service Revenue", "Income", "$44,250"],
        ],
    },
    "accounts-payable": {
        title: "Accounts Payable",
        description: "Track supplier invoices, approvals, payment schedules, and outstanding bills.",
        action: "New Bill",
        icon: "payable",
        stats: [
            ["Open Bills", "46", "bg-blue-500"],
            ["Due This Week", "12", "bg-amber-400"],
            ["Paid This Month", "$41,250", "bg-emerald-500"],
            ["Overdue", "$7,980", "bg-rose-500"],
        ],
        columns: ["Bill No.", "Supplier", "Due Date", "Amount"],
        rows: [
            ["BILL-2041", "Blue Ocean Supplies", "May 20, 2025", "$4,820"],
            ["BILL-2038", "Metro Logistics", "May 22, 2025", "$2,100"],
            ["BILL-2031", "Nova Office Mart", "May 28, 2025", "$940"],
        ],
    },
    "accounts-receivable": {
        title: "Accounts Receivable",
        description: "Monitor customer invoices, collections, credit balances, and ageing schedules.",
        action: "New Invoice",
        icon: "receivable",
        stats: [
            ["Open Invoices", "58", "bg-blue-500"],
            ["Due Today", "7", "bg-amber-400"],
            ["Collected", "$56,210", "bg-emerald-500"],
            ["Outstanding", "$23,780", "bg-rose-500"],
        ],
        columns: ["Invoice", "Customer", "Due Date", "Amount"],
        rows: [
            ["INV-1052", "Green Valley Co-op", "May 18, 2025", "$3,450"],
            ["INV-1049", "Central Traders", "May 24, 2025", "$1,980"],
            ["INV-1042", "North Branch", "May 29, 2025", "$5,720"],
        ],
    },
    "cash-management": {
        title: "Cash Management",
        description: "Control cash inflows, outflows, bank accounts, transfers, and reconciliation.",
        action: "Record Cash Entry",
        icon: "cash",
        stats: [
            ["Cash in Hand", "$18,500", "bg-blue-500"],
            ["Bank Balance", "$96,740", "bg-emerald-500"],
            ["Transfers", "14", "bg-violet-500"],
            ["Unreconciled", "6", "bg-amber-400"],
        ],
        columns: ["Reference", "Account", "Type", "Amount"],
        rows: [
            ["CASH-782", "Main Cash", "Receipt", "$2,450"],
            ["BANK-344", "Operating Bank", "Transfer", "$8,000"],
            ["CASH-779", "Petty Cash", "Payment", "$320"],
        ],
    },
    "general-ledger": {
        title: "General Ledger (GL)",
        description: "Review journal entries, posting status, ledgers, trial balance, and adjustments.",
        action: "New Journal",
        icon: "ledger",
        stats: [
            ["Posted Entries", "286", "bg-blue-500"],
            ["Draft Journals", "11", "bg-amber-400"],
            ["Adjustments", "8", "bg-violet-500"],
            ["Period Balance", "$50,200", "bg-emerald-500"],
        ],
        columns: ["Journal", "Account", "Debit", "Credit"],
        rows: [
            ["JV-7012", "Sales Revenue", "$0", "$2,450"],
            ["JV-7012", "Accounts Receivable", "$2,450", "$0"],
            ["JV-7008", "Office Expense", "$320", "$0"],
        ],
    },
    reports: {
        title: "Reports",
        description: "Generate financial statements, ageing summaries, audit exports, and management reports.",
        action: "Run Report",
        icon: "reports",
        stats: [
            ["Saved Reports", "18", "bg-blue-500"],
            ["Scheduled", "6", "bg-emerald-500"],
            ["Exports", "42", "bg-violet-500"],
            ["Pending Review", "3", "bg-amber-400"],
        ],
        columns: ["Report", "Period", "Owner", "Status"],
        rows: [
            ["Profit and Loss", "May 2025", "Finance", "Ready"],
            ["Balance Sheet", "May 2025", "Admin", "Draft"],
            ["Customer Ageing", "Q2 2025", "Finance", "Ready"],
        ],
    },
    "user-management": {
        title: "User Management",
        description: "Manage staff access, roles, approvals, branch permissions, and account security.",
        action: "Add User",
        icon: "users",
        stats: [
            ["Active Users", "36", "bg-blue-500"],
            ["Administrators", "5", "bg-violet-500"],
            ["Pending Invites", "4", "bg-amber-400"],
            ["Locked Accounts", "1", "bg-rose-500"],
        ],
        columns: ["User", "Role", "Branch", "Status"],
        rows: [
            ["Admin User", "Administrator", "Head Office", "Active"],
            ["Finance Manager", "Approver", "Head Office", "Active"],
            ["Branch Cashier", "Cashier", "North Branch", "Pending"],
        ],
    },
    "audit-logs": {
        title: "Audit Logs",
        description: "Track approvals, edits, user activity, voucher changes, and security events.",
        action: "Export Logs",
        icon: "audit",
        stats: [
            ["Today Events", "124", "bg-blue-500"],
            ["Approvals", "18", "bg-emerald-500"],
            ["Warnings", "3", "bg-amber-400"],
            ["Critical", "0", "bg-rose-500"],
        ],
        columns: ["Time", "User", "Activity", "Result"],
        rows: [
            ["09:20 AM", "Admin User", "Approved invoice INV-1052", "Success"],
            ["10:05 AM", "Finance Manager", "Updated supplier terms", "Success"],
            ["11:15 AM", "Branch Cashier", "Cash entry submitted", "Pending"],
        ],
    },
    settings: {
        title: "Settings",
        description: "Configure company profile, fiscal periods, taxes, numbering, and notification rules.",
        action: "Save Settings",
        icon: "settings",
        stats: [
            ["Fiscal Year", "2025", "bg-blue-500"],
            ["Tax Rules", "8", "bg-emerald-500"],
            ["Workflows", "6", "bg-violet-500"],
            ["Alerts", "12", "bg-amber-400"],
        ],
        columns: ["Setting", "Current Value", "Owner", "Status"],
        rows: [
            ["Invoice Prefix", "INV", "Finance", "Active"],
            ["Fiscal Period", "Jan-Dec", "Admin", "Active"],
            ["Approval Limit", "$5,000", "Management", "Active"],
        ],
    },
    "system-administration": {
        title: "System Administration",
        description: "Maintain backups, integrations, system health, permissions, and operational controls.",
        action: "System Check",
        icon: "admin",
        stats: [
            ["System Health", "Good", "bg-emerald-500"],
            ["Backups", "Daily", "bg-blue-500"],
            ["Integrations", "4", "bg-violet-500"],
            ["Open Tasks", "5", "bg-amber-400"],
        ],
        columns: ["Area", "Last Checked", "Owner", "Status"],
        rows: [
            ["Database Backup", "Today, 02:00 AM", "System", "Completed"],
            ["Email Service", "Today, 08:00 AM", "Admin", "Online"],
            ["API Sync", "Yesterday, 11:30 PM", "System", "Completed"],
        ],
    },
};

const ModulePage = ({ moduleKey }) => {
    const module = moduleContent[moduleKey] || moduleContent.accounts;

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-950">{module.title}</h1>
                    <p className="mt-1 text-xs text-slate-500">{module.description}</p>
                </div>
                <button className="flex h-8 items-center gap-2 rounded-md bg-blue-600 px-3 text-xs font-bold text-white shadow-sm hover:bg-blue-700" type="button">
                    <AppIcon name="plus" className="h-3.5 w-3.5" />
                    {module.action}
                </button>
            </div>

            <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {module.stats.map(([label, value, color]) => (
                    <article className="flex min-h-[76px] items-center gap-3 rounded-lg border border-slate-200/80 bg-white/80 p-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-white" key={label}>
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${color}`}>
                            <AppIcon name={module.icon} className="h-3.5 w-3.5" />
                        </span>
                        <div>
                            <p className="text-xs font-bold text-slate-500">{label}</p>
                            <strong className="block text-lg font-bold text-slate-950">{value}</strong>
                        </div>
                    </article>
                ))}
            </section>

            <section className="grid grid-cols-1 gap-3 xl:grid-cols-[1.25fr_0.75fr]">
                <article className="overflow-x-auto rounded-lg border border-slate-200/80 bg-white/75 p-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-white">
                    <h2 className="text-base font-bold text-slate-950">Recent Records</h2>
                    <table className="mt-2 w-full border-collapse text-xs">
                        <thead>
                            <tr className="text-left text-slate-500">
                                {module.columns.map((column) => (
                                    <th className="border-b border-slate-100 px-2 py-2" key={column}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {module.rows.map((row) => (
                                <tr key={row.join("-")}>
                                    {row.map((cell, index) => (
                                        <td className="border-b border-slate-100 px-2 py-2" key={`${cell}-${index}`}>
                                            {index === row.length - 1 ? <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">{cell}</span> : cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

                <article className="rounded-lg border border-slate-200/80 bg-white/75 p-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-white">
                    <h2 className="text-base font-bold text-slate-950">Workflow</h2>
                    <div className="mt-3 grid gap-2">
                        {["Review pending items", "Approve verified entries", "Post to ledger", "Export monthly summary"].map((step, index) => (
                            <div className="flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/70 px-3 py-2 text-xs font-bold text-slate-700" key={step}>
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">{index + 1}</span>
                                {step}
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </div>
    );
};

export default ModulePage;
