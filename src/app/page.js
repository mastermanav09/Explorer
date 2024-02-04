"use client";
import classes from "./Home.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const HomePage = () => {
  const a = Math.random();
  console.log(a);
  return (
    <div className={classes.container}>
      {a}
      <div className={classes.textContainer}>
        <h1 className={classes.title}>Creative Thoughts Agency.</h1>
        <p className={classes.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={classes.buttons}>
          <button className={classes.button}>Learn More</button>
          <button className={classes.button}>Contact</button>
        </div>
        <div className={classes.brands}>
          <Image src="/brands.png" alt="" fill className={classes.brandImg} />
        </div>
      </div>
      <div className={classes.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={classes.heroImg} />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
// export default HomePage;
