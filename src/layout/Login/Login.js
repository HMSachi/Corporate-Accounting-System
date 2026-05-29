import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetLogin } from "../../actions/LoginAction";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error } = useSelector((state) => state.login);
    const [formData, setFormData] = useState({
        email: "admin@corporate.com",
        password: "admin123",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(GetLogin(formData.email, formData.password)).then(() => {
            navigate("/admin/dashboard");
        });
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sky-950 p-6 font-sans text-xs text-slate-800">
            <video
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="/main.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-800/55 to-sky-500/35" />
            <section className="relative z-10 grid w-full max-w-sm gap-4 rounded-xl border border-white/40 bg-white p-6 shadow-2xl shadow-blue-950/35">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 text-xs font-bold text-white shadow-lg shadow-sky-700/30">CA</div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-950">Corporate Accounting</h1>
                        <p className="mt-1 text-xs text-slate-500">Cooperative accounting system</p>
                    </div>
                </div>

                <form className="grid gap-2" onSubmit={handleSubmit}>
                    <h2 className="text-base font-bold text-slate-950">Sign in</h2>
                    <p className="text-xs text-slate-500">Access customers, accounts, reports, and audit records.</p>

                    <label className="font-bold text-slate-700" htmlFor="email">Email address</label>
                    <input
                        className="h-8 rounded-md border border-slate-300 px-3 text-xs outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="admin@corporate.com"
                    />

                    <label className="font-bold text-slate-700" htmlFor="password">Password</label>
                    <input
                        className="h-8 rounded-md border border-slate-300 px-3 text-xs outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />

                    {error && <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700">{error}</div>}

                    <button className="mt-1 h-[30px] rounded-md bg-gradient-to-r from-sky-500 to-blue-700 px-3 text-xs font-bold text-white shadow-md shadow-sky-700/20 hover:from-sky-400 hover:to-blue-600 disabled:opacity-70" type="submit" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Continue"}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Login;
