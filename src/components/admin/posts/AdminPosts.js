import React from "react";
import classes from "./AdminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data";

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div className={classes.container}>
      <h1>Posts</h1>
      {posts?.map((post) => (
        <div className={classes.post} key={post._id}>
          <div className={classes.detail}>
            <Image
              src={post.image || "/noavatar.png"}
              width={50}
              height={50}
              alt=""
            />
            <span>{post.title}</span>
          </div>

          <form action={deletePost.bind(null, post._id)}>
            {/* <input type="hidden" name="id" value={post.id} /> */}
            <button className={classes.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
