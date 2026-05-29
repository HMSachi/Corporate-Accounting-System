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
        <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6 font-sans text-xs text-slate-800">
            <section className="grid w-full max-w-sm gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">CA</div>
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

                    <button className="mt-1 h-[30px] rounded-md bg-blue-600 px-3 text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-70" type="submit" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Continue"}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Login;
