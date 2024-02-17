import React from "react";
import classes from "./AdminUsers.module.css";
import Image from "next/image";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={classes.container}>
      <h1>Users</h1>
      {users?.map((user) => (
        <div className={classes.user} key={user._id}>
          <div className={classes.detail}>
            <Image
              src={user.image || "/noavatar.png"}
              width={50}
              height={50}
              alt=""
            />
            <span>{user.username}</span>
          </div>

          <form action={deleteUser.bind(null, user._id)}>
            {/* <input type="hidden" name="id" value={post.id} /> */}
            <button className={classes.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
