import React from "react";
import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {
  // const actionInComponent = async () => {
  //   "use server";
  //   console.log("It works");
  // };

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="desc" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="UserId" name="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="postId" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
