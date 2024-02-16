import React from "react";
import Image from "next/image";
import classes from "./About.module.css";

export const metadata = {
  title: "About page",
  description: "About page description",
};

const AboutPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h2 className={classes.subtitle}>About Agency</h2>
        <h1 className={classes.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={classes.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={classes.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={classes.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={classes.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
