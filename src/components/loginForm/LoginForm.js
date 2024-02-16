"use client";
import { loginUser } from "@/lib/action";
import React, { useEffect } from "react";
import classes from "./LoginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginUser, null);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/");
  //   }, [router, state?.success]);

  return (
    <form className={classes.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/register">
        {"Don't have an account?"} <b>Sign up</b>
      </Link>
    </form>
  );
};

export default LoginForm;
