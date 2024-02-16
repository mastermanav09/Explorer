"use client";
import React from "react";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const formSubmit = (event) => {
    console.log(event.target.value);
  };
  return (
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
  );
};

export default ContactForm;
