import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomers } from "../../../actions/CustomerAction";
import AppIcon from "../../../components/AppIcon";
import CustomerActionsPanel from "../../../components/Admin/CustomerManagement/CustomerActionsPanel";
import CustomerBlocks from "../../../components/Admin/CustomerManagement/CustomerBlocks";
import CustomerTable from "../../../components/Admin/CustomerManagement/CustomerTable";

const CustomerManagement = () => {
    const dispatch = useDispatch();
    const { customers, isLoading, error } = useSelector((state) => state.customer);

    useEffect(() => {
        dispatch(GetCustomers());
    }, [dispatch]);

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="page-title">Customer Management</h1>
                    <p className="mt-1 text-xs text-slate-500">Manage cooperative customers, balances, and account status.</p>
                </div>
                <button className="flex h-8 items-center gap-2 rounded-md bg-blue-600 px-3 text-xs font-bold text-white shadow-sm hover:bg-blue-700" type="button">
                    <AppIcon name="plus" className="h-3.5 w-3.5" />
                    Add Customer
                </button>
            </div>

            <CustomerBlocks />

            <section className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_0.8fr]">
                <CustomerTable customers={customers} error={error} isLoading={isLoading} />
                <CustomerActionsPanel />
            </section>
        </div>
    );
};

export default CustomerManagement;
