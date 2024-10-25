import React, { useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { login as storeAuthLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import InputwRef from "../components/InputwRef";
import Header from "../components/Header/Header";

const LoginFormUnit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError(""); // Clear error when logging in
    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) { 
          dispatch(storeAuthLogin(userData))
        console.log("dispatching userData");
        
        };
        navigate("/");
      }
    } catch (errorFound) {
      setError(errorFound || "An error occurred during login");
      console.error("Login error:", errorFound);
    }
  };
  return (
    <>
      <section>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Log in into your account
        </h2>
        <Link
          className="font-medium text-primary underline underline-offset-4"
          to="/signup"
        >
          signup{" "}
        </Link>

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        <form onSubmit={handleSubmit(login)}>
          <InputwRef
            label="email"
            autoComplete="email"
            name="Email"
            placeholder="enter your email"
            type="email"
            ref={register}
            {...register("email", {
              required: true,
              validate: {
                pattern: (value) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                    value
                  ) || "email must be a valid address",
              },
            })}
          />
          <InputwRef
            label="password"
            autoComplete="password"
            name="password"
            placeholder="enter your password"
            type="password"
            ref={register}
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit">Login</Button>
        </form>
      </section>
    </>
  );
};

export default LoginFormUnit;
