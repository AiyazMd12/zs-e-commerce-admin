import React, { useState } from "react";
import AuthModule from "../../modules/AuthModule";
import SignUp from "../login/SignUp";
import LoginPage from "../login/LoginPage";
const Login = () => {
  const [isRegister, setIsRegister] = useState(true);
  const handleRegister = (bool) =>{
    setIsRegister(bool)
  }
  return isRegister ? (
    <AuthModule authContent={<SignUp handleRegister={handleRegister} />}  AUTH_TITLE="Sign Up" />
  ) : (
    <AuthModule authContent={<LoginPage handleRegister={handleRegister}/>} AUTH_TITLE="Sign in" />
  );
};

export default Login;
