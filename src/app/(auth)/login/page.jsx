"use client"

import Link from "next/link";

const LoginPage = () => {
    const handleLoginFunc = (e) =>{
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log("Email:", email, "Password:", password)

    }


    return (
        <div className="min-h-[80vh] flex justify-center items-center bg-slate-100 mt-10">
            <div className="p-20 rounded-xl bg-white"> 
                <h2 className="font-bold text-3xl text-center mb-6">Login your account</h2>
                <form className="space-y-4" onSubmit={handleLoginFunc}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" 
                        name="email"
                        placeholder="Your email" />
                        
                    </fieldset>
                    <fieldset className="fieldset mb-6">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" 
                        name="password"
                        placeholder="Your password" />
                        
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
                <p className="mt-5 text-sm text-center">Dont have an account? <Link href="/register" className="text-blue-500">Register now!</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;