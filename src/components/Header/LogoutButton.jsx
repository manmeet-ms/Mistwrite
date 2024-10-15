import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/signup")
      })
      .catch((e) => {
        console.log("Error found - logoutBtncomponentHeader", e);
      });
  };
  return <Button variant="ghost" onClick={logoutHandler}>Logout </Button>;
  // return <Button variant="ghost" onClick={logoutHandler}>Logout<Logout className="ml-1" sx={{fontSize:14}} /> </Button>;
};

export default LogoutButton;
