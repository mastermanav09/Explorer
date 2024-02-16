"use client";
import { registerUser } from "@/lib/action";
import React, { useEffect } from "react";
import classes from "./RegisterForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [state, formAction] = useFormState(registerUser, null);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [router, state?.success]);

  return (
    <form className={classes.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Confirm password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error && <p>{state.error}</p>}
      <Link href="/login">
        {"Already have an account?"} <b>Sign in</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
