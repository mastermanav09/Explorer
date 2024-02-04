import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>Footer</div>
      <div className={classes.text}>
        Explorer 2024 &copy; All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
