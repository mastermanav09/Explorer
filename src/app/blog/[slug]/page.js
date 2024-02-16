import React, { Suspense } from "react";
import classes from "./SinglePage.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
import moment from "moment";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const getData = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// const deleteData = async (slug) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
//       method: "DELETE",
//     });

//     if (!res.ok) {
//       throw new Error("Something went wrong!");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

const SinglePagePost = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  // const post = await getPost(slug);

  return (
    <div className={classes.container}>
      {post.image && (
        <div className={classes.imgContainer}>
          <Image src={post.image} alt="" fill className={classes.img} />
        </div>
      )}
      <div className={classes.textContainer}>
        <h1 className={classes.title}>{post.title}</h1>
        <div className={classes.detail}>
          {post && (
            <Suspense
              fallback={<div style={{ color: "white" }}>Loading...</div>}
            >
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={classes.detailText}>
            <span className={classes.detailTitle}>Published</span>
            <span className={classes.detailValue}>
              {moment(post.createdAt).format("lll")}
            </span>
          </div>
        </div>
        <div className={classes.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePagePost;
