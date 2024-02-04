import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./PostCard.module.css";

const PostCard = (props) => {
  const { post } = props;

  // const post = {
  //   title: "Post",
  //   id: parseInt(Math.random() * 10),
  //   body: "lorem damdwo dad wd aodwad waoid wimda wijfjmfn ai daoi doawdnaojd awod oad waofaoj ajd awu oawd aoid aod adi ad waod awod awi do wjq-om fein  u rsif esf sfidm di deid adn0iad ae d q qdq",
  // img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // createdAt: new Date(),
  // };

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        {post.img && (
          <div className={classes.imgContainer}>
            <Image src={post.img} alt="" fill className={classes.img} />
          </div>
        )}
        <span className={classes.date}>
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={classes.bottom}>
        <h1 className={classes.title}>{post.title}</h1>
        <p className={classes.desc}>{post.body}</p>
        <Link className={classes.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
