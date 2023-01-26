import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactDetails = styled.div`
  font-style: normal;
`;

const ContactLink = styled.a`
  text-decoration: none;
  text-align: center;
  display: block;
  color: #343434;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const PhoneForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const MessageField = styled.textarea`
  margin: 1rem;
  height: 10rem;
  width: 90%;
  font-family: "Spline Sans Mono", monospace;
  font-size: 1rem;
  text-align: center;
  line-height: 3rem;
`;

const Input = styled.input`
  margin: 1rem;
  height: 3rem;
  width: 90%;
  font-family: "Spline Sans Mono", monospace;
  font-size: 1rem;
  text-align: center;
`;

const SubmitButton = styled.input`
  margin: 1rem;
  width: 10rem;
  height: 3rem;
  background-color: blue;
  border-radius: 0.3rem;
  border: none;
  color: white;
  font-size: 1.3rem;
  font-family: "Spline Sans Mono", monospace;
`;

const CallButton = styled.a`
  margin: 1rem;
  width: 10rem;
  height: 3rem;
  background-color: blue;
  border-radius: 0.3rem;
  border: none;
  color: white;
  font-size: 1.3rem;
  font-family: "Spline Sans Mono", monospace;
  text-decoration: none;
  line-height: 3rem;
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
      <h2>Email</h2>
      <EmailForm ref={form} onSubmit={sendEmail}>
        <ContactLink href="mailto:tanesamuelkaio@gmail.com">
          > tanesamuelkaio@gmail.com
        </ContactLink>
        <Input type="text" name="user_name" placeholder="Name" />
        <Input type="email" name="user_email" placeholder="Email address" />
        <MessageField placeholder="Say hello!" name="message" />
        <SubmitButton type="submit" value="Send" />
      </EmailForm>
      <PhoneForm>
        <ContactLink href="tel:+61466651820">
          <img
            src="https://w7.pngwing.com/pngs/356/440/png-transparent-iphone-computer-icons-telephone-email-telephone-electronics-text-mobile-phones.png"
            width="75px"
          />
        </ContactLink>
      </PhoneForm>
    </ContactDetails>
  );
};
