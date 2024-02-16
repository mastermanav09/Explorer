import React from "react";
import classes from "./Register.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
