// import React from 'react'
import React, {useState} from 'react'
// import { Link, matchPath, useNavigate } from 'react-router-dom'
import {Link, useNavigate} from 'react-router-dom'
import {login as storeAuthLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button";
// import {InputwRef} from './index';
import InputwRef from './InputwRef';
// import {Button, Input, Logo} from "./index"

// import { login as authLogin } from '../store/authSlice'
// import {useDispatch} from "react-redux"
// import authService from "../appwrite/auth"
// import {useForm} from "react-hook-form"
const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit}=useForm();
  const [error, setError] = useState("");

  const login=async(data)=>{
      setError(""); // obv when we are loggin-in we shuld be clearing all errors 
      try {
          const session= await storeAuthLogin.login(data) // call the store login funtoio to get user data 
          if (session){ // now if we successfully retrieved user-data. then GET the userData by authservice methods in auth.js  
              const userData = await authService.getCurrentUser(userData) // getting into the app, why we should keep the user at login page? we navigate it to home(root) 
              if (userData) {useDispatch(storeAuthLogin)

                navigate("/") // programmaticlly redirecting to /, we have to click in Link 
              }
              
          }
      } catch (error) {
        setError(error);
          console.log("login component error, userdata retrieval error", error);
          
      }
  }
return (

  <>
<section>
<h1>sign in into your account</h1>
<Link to="/signup">signup</Link>
{error && (<p className="text-red-500">{error} </p>)}

<form onSubmit={handleSubmit(login)}>

<InputwRef label="email" name="Email" placeholder="enter your email" type="email" 
{...register("email", {
  required:true,
  validate:{
      matchPattern:(value)=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      .test(value)|| "email must be a valid address"
  }
})}
/>
<InputwRef label="password" name="password" placeholder="enter your password" type="password" 
{...register("password", {
  required:true,
  
})}
/>
<Button type="submit" onSubmit={login} >Login</Button>

</form>

</section>
  </>
)
}

export default LoginComponent