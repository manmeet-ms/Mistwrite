import React, { useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

// import { login as storeAuthLogin } from "../store/authSlice";
// import authService from "../appwrite/auth";
// import InputwRef from "../components/InputwRef";
import Header from "../components/Header/Header";
import LoginFormUnit from "../components/LoginFormUnit";
import { ThemeProvider } from '@/components/theme-provider';

const Login = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { register, handleSubmit } = useForm();
  // const [error, setError] = useState("");

  // const login = async (data) => {
  //   setError(""); // Clear error when logging in
  //   try {
  //     const session = await authService.login(data);

  //     if (session) {
  //       const userData = await authService.getCurrentUser();
  //       if (userData) { 
  //         dispatch(storeAuthLogin(userData))
  //       console.log("dispatching userData");
        
  //       };
  //       navigate("/");
  //     }
  //   } catch (errorFound) {
  //     setError(errorFound || "An error occurred during login");
  //     console.error("Login error:", errorFound);
  //   }
  // };
  return (
    <>
<ThemeProvider>
      <Header />
      <section className=" px-2 ">
  <LoginFormUnit/>
      </section>

  </ThemeProvider>
    </>
  );
};

export default Login;
