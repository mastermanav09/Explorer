"use client";
import { useState } from "react";
import classes from "./Links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { title: "Homepage", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const session = true;
  const isAdmin = true;

  const toggleMenuHandler = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div>
      <div className={classes.links}>
        {links.map((link, index) => (
          <NavLink key={index} linkItem={link} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink linkItem={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={classes.logout}>Logout</button>
          </>
        ) : (
          <NavLink linkItem={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <button className={classes.menuButton} onClick={toggleMenuHandler}>
        Menu
      </button>
      {openMenu && (
        <div className={classes.mobileLinks}>
          {links.map((link, index) => (
            <NavLink key={index} linkItem={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
