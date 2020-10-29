import React from "react";
import cn from "classnames";

import styles from "./login.module.css";
import MainButton from "../buttons/main-button";

function Login() {
  return (
    <div className={cn(styles.container)}>
      <form>
        <label>
          <input type="text" name="email" required></input>
          <div className={cn(styles.labelText)}>Email Adress</div>
        </label>
        <label>
          <input type="password" name="psw" required></input>
          <div className={cn(styles.labelText)}>Password</div>
        </label>
        <label>
          <a type="forgot" value="forgot">
            Forgot Password?
          </a>
        </label>
      </form>
    </div>
  );
}

export default Login;
