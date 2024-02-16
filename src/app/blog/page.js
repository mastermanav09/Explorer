import React from "react";
import classes from "./Blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog");

    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const BlogPage = async () => {
  const posts = await getData();
  // const posts = await getPosts();
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
