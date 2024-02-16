import classes from "./Login.module.css";
import React from "react";
import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/components/loginForm/LoginForm";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
  // console.log(await auth());
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form action={handleGithubLogin}>
          <button className={classes.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
