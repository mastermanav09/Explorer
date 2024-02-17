"use client";
import React from "react";
import classes from "./AdminPostForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, null);

  return (
    <form action={formAction} className={classes.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="Image" />
      <textarea type="text" name="desc" placeholder="Description" rows={8} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
