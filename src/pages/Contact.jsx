import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Header } from "../components/Header";
import { useWindowSizeContext } from "../utils/WindowSizeContext";
import { Wrapper } from "../components/Wrapper";

const ContactDetails = styled.address`
  font-style: normal;
  max-width: 800px;
`;

const ContactLink = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  display: block;
  color: #343434;
  font-family: "Spline Sans Mono", monospace;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: ${(props) => (props.windowSize > 800 ? "column" : "column")};
  align-items: center;
  width: ${(props) => (props.windowSize > 800 ? "800px" : "90vw")};
`;

const NameAndEmailInput = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.windowSize > 800 ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => (props.windowSize > 800 ? "400px" : "90%")};
`;

const LogoForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
`;

const MessageField = styled.textarea`
  margin: 1rem;
  height: 10rem;
  width: ${(props) => (props.windowSize > 800 ? "900px" : "90%")};
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
  border-radius: 0.3rem;
  border: none;
  color: white;
  font-size: 1.3rem;
  font-family: "Spline Sans Mono", monospace;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgb(116, 56, 255),
    rgb(75, 0, 255)
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: 0.3s;
  :hover {
    background-position: 0 0;
  }
`;

export const Contact = () => {
  const { windowSize } = useWindowSizeContext();
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
    <>
      <Header>Contact me</Header>
      <Wrapper>
        <ContactDetails>
          <EmailForm ref={form} onSubmit={sendEmail} windowSize={windowSize}>
            <NameAndEmailInput windowSize={windowSize}>
              <Input type="text" name="user_name" placeholder="Name" />
              <Input
                type="email"
                name="user_email"
                placeholder="Email address"
              />
            </NameAndEmailInput>
            <div>
              <MessageField placeholder="Say hello!" name="message" />
              <SubmitButton type="submit" value="Send" />
            </div>
          </EmailForm>
          <LogoForm>
            <ContactLink href="tel:+61466651820" target="_blank">
              <img src={require("../img/phone-logo.png")} width="75px" />
            </ContactLink>
            <ContactLink href="https://github.com/Lanruoj" target="_blank">
              <img src={require("../img/github-mark.png")} width="75px" />
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/tane-kaio/"
              target="_blank"
            >
              <img src={require("../img/li-logo.png")} height="70px" />
            </ContactLink>
          </LogoForm>
        </ContactDetails>
      </Wrapper>
    </>
  );
};
