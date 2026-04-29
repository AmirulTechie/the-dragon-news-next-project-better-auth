"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}}= useForm()


    const handleRegisterFunc = (data) =>{
        console.log(data);
    }

    console.log(errors);
    return (
        <div className="min-h-[80vh] flex justify-center items-center bg-slate-100 mt-10">
            <div className="p-20 rounded-xl bg-white"> 
                <h2 className="font-bold text-3xl text-center mb-6">Register your account</h2>
                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>



                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name*</legend>
                        <input type="text" className="input" 
                        placeholder="Your Name"
                        {...register("name", {required: "Enter Name"})}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" 
                        placeholder="Your photo url"
                        {...register("url")}
                        />
                        
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email*</legend>
                        <input type="email" className="input" 
                        placeholder="Your email"
                        {...register("email", {required: "Enter Email"})}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        
                    </fieldset>
                    <fieldset className="fieldset mb-6">
                        <legend className="fieldset-legend">Password*</legend>
                        <input type="password" className="input" 
                        placeholder="Your password" 
                            {...register("password", {required: "Enter password"})
                            }
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                </form>
                <p className="mt-5 text-sm text-center">Already have an account? <Link href="/login" className="text-blue-500">Login now!</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;