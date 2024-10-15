import React, { useState } from "react";

import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login as storeAuthLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, seterror] = useState("");
  const { register, handleSubmit } = useForm();
  const signup = async (data) => {
    seterror("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (errorFound) {
      console.log(
        "signup component error, userdata retrieval error",
        errorFound
      );
    }
  };

  return (
    <>
      <section>
        <h1>create new account</h1>
        <Link>signup</Link>

        {errorFound && <p className="text-red-500">{errorFound} </p>}

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
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          <Button type="submit">Create Account</Button>
        </form>
      </section>
    </>
  );
};

export default Signup;
