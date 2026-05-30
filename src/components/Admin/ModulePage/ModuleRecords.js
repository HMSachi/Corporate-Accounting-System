import React from "react";

const ModuleRecords = ({ module }) => {
    return (
        <article className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-base font-normal text-slate-950">Recent Records</h2>
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
                                    {index === row.length - 1 ? <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-normal text-emerald-700">{cell}</span> : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
};

export default ModuleRecords;
