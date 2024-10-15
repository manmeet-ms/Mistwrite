// used for managin protected content, whether reder the component or not based upon authPrivilege

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import Loader from "./Loader";

export default function Protected( {authentication = true, children}) {
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  
  useEffect(() => {
    // we can simply chekc iwth authstatus as well
    if(authentication && authStatus !== authentication){
      // user will send the authentication status, but we wil stil check it by useAuth service
      // above condition checks, user is not logged-in
      navigate("/login")
      console.log("first condition redirecting to /login AuthLayout.jsx");
      
    } else if(!authentication && authStatus !== authentication){
      navigate("/")
      console.log("else if: condition redirecting to 'root' AuthLayout.jsx");
  }
  setloader(false)
}, [authStatus, navigate, authentication])//runs the useeffect if any the items in dependiecy array changes

// return loader ? <h1 className="text-4xl">Loading...</h1> : <>{children}</>
return loader ? <Loader/> : <>{children}</>
}
