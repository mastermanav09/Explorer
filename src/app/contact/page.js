import React from "react";
import Image from "next/image";
import classes from "./Contact.module.css";
import ContactForm from "@/components/contactForm/ContactForm";

export const metadata = {
  title: "Contact page",
  description: "Contact page description",
};

const ContactPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={classes.img} />
      </div>
      <div className={classes.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
