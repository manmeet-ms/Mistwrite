import React, { useState } from "react";

import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login as storeAuthLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import InputwRef from "./InputwRef";
import { Button } from "@/components/ui/button";

const SignupComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, seterror] = useState("");
  const { register, handleSubmit } = useForm();
  const signup = async (data) => {
    seterror("");
    try {
      const newUser  = await authService.createAccount(data);
      if (newUser ) {
        const currentUserData  = await authService.getCurrentUser();
        if (currentUserData ) dispatch(storeAuthLogin(currentUser));
        navigate("/");
      }
    } catch (err) {
      console.log("Signup error:", err);
      setError("An error occurred while creating your account.");
    }
  };

  return (
    <>
      <section>
        <h1>create new account</h1>
        <Link>signup</Link>
{/* // TODO error is defined */}
        {error && <p className="text-red-500">{error} </p>}

        <form onSubmit={handleSubmit(signup)}>
          <InputwRef
            label="name"
            name="name"
            placeholder="enter your name"
            type="text"
            {...register("name", {
              required: true,
            })}
          />
          <InputwRef
            label="email"
            name="Email"
            placeholder="enter your email"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          <InputwRef
            label="password"
            name="password"
            placeholder="enter your password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit">Create Account</Button>
        </form>
      </section>
    </>
  );
};


export default SignupComponent;