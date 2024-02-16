import React from "react";
import Links from "./links/Links";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={classes.container}>
      <Link href="/" className={classes.logo}>
        Logo
      </Link>
      <Links session={session} />
    </div>
  );
};

export default Navbar;
