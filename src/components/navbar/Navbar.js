import React from "react";
import Links from "./links/Links";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>Logo</div>
      <Links />
    </div>
  );
};

export default Navbar;
