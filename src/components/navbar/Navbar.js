import React from "react";
import Links from "./links/Links";
import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <Link href="/" className={classes.logo}>
        Logo
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
