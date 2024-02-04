"use client";
import React from "react";
import Image from "next/image";
import classes from "./Contact.module.css";

const ContactPage = () => {
  const formSubmit = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={classes.img} />
      </div>
      <div className={classes.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form onSubmit={formSubmit} className={classes.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
