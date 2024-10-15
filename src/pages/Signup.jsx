
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import authService from "../appwrite/auth";
import { login as storeAuthLogin } from "../store/authSlice";
import InputwRef from "../components/InputwRef";
import Header from '../components/Header/Header' 

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const create = async (data) => {
    setError("");
    try {
      const newUser  = await authService.createAccount(data);
      console.log("Data received:: userData::", data);
      console.log("Account created:: userData::", newUser);
      
      if (newUser ) {
        const currentUserData  = await authService.getCurrentUser(newUser);
        if (currentUserData ) dispatch(storeAuthLogin(currentUserData));
        console.log("User Found:: userData::", currentUserData);
        navigate("/");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message || "An error occurred while creating your account.");
    }
  };

  return (
    <>

    <Header/>
      <section>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      create new account
      </h2>
      
{/* // TODO error is defined */}
        {error && (<p className="text-red-500">{error} </p>)}

        <form onSubmit={handleSubmit(create)}>
          <InputwRef
            label="name"
            ref={register}
            name="name"
            placeholder="enter your name"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          <InputwRef
            label="email"
            ref={register}
            name="Email"
            placeholder="enter your email"
            autoComplete="email"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          <InputwRef
            label="password"
            ref={register}
            name="password"
            placeholder="enter your password"
            autoComplete="password"
            type="password"
            {...register("password", {
              required: true,
            })}
            />
          <Button type="submit" >Create Account</Button>
        </form>
      </section>
    </>
  );
};


export default Signup;

// import React from 'react'

// import Signup from '../components/Signup'
// const Signup = () => {
//   return (
// <div className="px-4">
// <Signup/>
// </div>
//   )
// }

// export default Signup
