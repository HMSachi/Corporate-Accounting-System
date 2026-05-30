import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAdminModule } from "../../../actions/AdminModuleAction";
import ModuleHeader from "./ModuleHeader";
import ModuleRecords from "./ModuleRecords";
import ModuleStats from "./ModuleStats";
import ModuleWorkflow from "./ModuleWorkflow";

const AdminModulePage = ({ moduleKey }) => {
    const dispatch = useDispatch();
    const { module, isLoading, error } = useSelector((state) => state.adminModule);

    useEffect(() => {
        dispatch(GetAdminModule(moduleKey));
    }, [dispatch, moduleKey]);

    if (isLoading || !module) {
        return <div className="rounded-lg border border-slate-200 bg-white p-5 text-xs font-normal text-slate-500">Loading module...</div>;
    }

    if (error) {
        return <div className="rounded-lg border border-rose-200 bg-rose-50 p-5 text-xs font-normal text-rose-600">{error}</div>;
    }

    return (
        <div className="space-y-5">
            <ModuleHeader module={module} />
            <ModuleStats module={module} />

            <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.25fr_0.75fr]">
                <ModuleRecords module={module} />
                <ModuleWorkflow />
            </section>
        </div>
    );
};

export default AdminModulePage;
