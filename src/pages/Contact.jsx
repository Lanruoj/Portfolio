import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import dotenv from "dotenv";
// dotenv.config();

const ContactDetails = styled.div`
  font-style: normal;
`;

const ContactLink = styled.a`
  text-decoration: none;
`;

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_blxaonb",
        "template_xwduzni",
        form.current,
        "CcsmHVdEk7eIWa1pW"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactDetails>
      {/* <h3>Email</h3>
      <ContactLink href="mailto:tanesamuelkaio@gmail.com">
        > tanesamuelkaio@gmail.com
      </ContactLink>
      <h3>Phone</h3>
      <ContactLink href="tel:+61466651820">> 0466651820</ContactLink> */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </ContactDetails>
  );
};
