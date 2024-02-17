import React, { Suspense } from "react";
import classes from "./Admin.module.css";
import AdminPosts from "@/components/admin/posts/AdminPosts";
import AdminPostForm from "@/components/admin/posts/AdminPostForm";
import AdminUsers from "@/components/admin/users/AdminUsers";
import AdminUserForm from "@/components/admin/users/AdminUserForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={classes.col}>
          <AdminPostForm userId={session?.user._id} />
        </div>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={classes.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
