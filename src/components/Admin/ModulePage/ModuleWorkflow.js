import React from "react";

const ModuleWorkflow = () => {
    const steps = ["Review pending items", "Approve verified entries", "Post to ledger", "Export monthly summary"];

    return (
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-base font-normal text-slate-950">Workflow</h2>
            <div className="mt-4 grid gap-3">
                {steps.map((step, index) => (
                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-normal text-slate-700" key={step}>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">{index + 1}</span>
                        {step}
                    </div>
                ))}
            </div>
        </article>
    );
};

export default ModuleWorkflow;
