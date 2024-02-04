import React from "react";
import classes from "./PostUser.module.css";
import Image from "next/image";
import { getUsers } from "@/lib/data";

// FETCH DATA WITH AN API
// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  const user = await getUsers(userId);

  return (
    <div className={classes.container}>
      <Image
        className={classes.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={classes.texts}>
        <span className={classes.title}>Author</span>
        <span className={classes.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
