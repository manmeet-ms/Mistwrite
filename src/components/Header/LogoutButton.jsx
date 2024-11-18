import { Button } from "@/components/ui/button";
import { Logout, LogoutSharp } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutButton = ({className}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        // navigate("/signup")
        navigate("/login")
      })
      .catch((e) => {
        console.log("Error found - logoutBtncomponentHeader", e);
      });
  };
  // return <Button variant="ghost" onClick={logoutHandler} className={`cursor-pointer flex items-center justify-center ${className}`}><LogoutSharp  className="mr-1 inline-flex mt-0.5  " sx={{fontSize:16}} /> Logout </Button>;
  return <span onClick={logoutHandler} className={`cursor-pointer flex items-center justify-center ${className}`}><LogoutSharp  className="mr-1 inline-flex mt-0.5  " sx={{fontSize:16}} /> Logout </span>;
  // return <Button variant="ghost" onClick={logoutHandler}>Logout<Logout className="ml-1" sx={{fontSize:14}} /> </Button>;
};

export default LogoutButton;
