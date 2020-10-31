import React from "react";

import Login from "../components/login/login"
import LoginHeader from "../components/login/login-header";
import GetStarted from '../components/first-page/first-page'

export default {
  title: "Login",
};

export const login = () => <Login></Login>
export const loginHeader = () => <LoginHeader></LoginHeader>
export const started = () => <GetStarted></GetStarted>