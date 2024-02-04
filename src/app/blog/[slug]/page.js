import React, { Suspense } from "react";
import classes from "./SinglePage.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

// const getData = async (slug) => {
//   try {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${slug}`,
//       {
//         next: { revalidate: 3600 },
//       }
//     );

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
  const post = await getPost(slug);

  return (
    <div className={classes.container}>
      {post.img && (
        <div className={classes.imgContainer}>
          <Image src={post.img} alt="" fill className={classes.img} />
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
            {/* <span className={classes.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span> */}
          </div>
        </div>
        <div className={classes.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePagePost;
