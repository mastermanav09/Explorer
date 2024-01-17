"use client";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./NavLink.module.css";
import Link from "next/link";

const NavLink = ({ linkItem }) => {
  const pathName = usePathname();
  const userPath = "/" + pathName.split("/")[1];

  return (
    <Link
      href={linkItem.path}
      className={[
        `${classes.container}`,
        userPath === linkItem.path && classes.active,
      ].join(" ")}
    >
      {linkItem.title}
    </Link>
  );
};

export default NavLink;
