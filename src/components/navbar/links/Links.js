"use client";
import { useState } from "react";
import classes from "./Links.module.css";
import NavLink from "./navLink/NavLink";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const Links = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { session } = props;

  const links = [
    { title: "Homepage", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

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
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink linkItem={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={classes.logout}>Logout</button>
            </form>
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
