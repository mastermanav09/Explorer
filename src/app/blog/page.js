import React from "react";
import classes from "./Blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <div key={post.id} className={classes.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
