import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Header } from "../components/Header";
import { useWindowSizeContext } from "../utils/WindowSizeContext";
import { Wrapper } from "../components/Wrapper";
import { LogoForm } from "../components/LogoForm";

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
            <MessageAndSubmit windowSize={windowSize}>
              <MessageField placeholder="Say hello!" name="message" />
              <SubmitButton type="submit">Send</SubmitButton>
            </MessageAndSubmit>
          </EmailForm>
          <LogoForm />
        </ContactDetails>
      </Wrapper>
    </>
  );
};

const ContactDetails = styled.address`
  font-style: normal;
  max-width: ${(props) => (props.windowSize > 800 ? "30rem" : "90vw")};
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: ${(props) => (props.windowSize > 800 ? "column" : "column")};
  align-items: center;
`;

const NameAndEmailInput = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.windowSize > 800 ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
`;

const MessageAndSubmit = styled.div`
  width: ${(props) => (props.windowSize > 800 ? "30.5rem" : "90%")};
`;

const MessageField = styled.textarea`
  margin: 1rem;
  height: 10rem;
  width: ${(props) => (props.windowSize > 800 ? "100%" : "90%")};
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

const SubmitButton = styled.button`
  display: inline-block;
  position: relative;
  padding: 1rem;
  margin-top: 0;
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 1.2rem;
  color: black;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border: solid black 1px;
  line-height: 0.5;
  ::before {
    content: ">\u00A0";
    display: inline-block;
    position: relative;
    left: 0;
    transition: 0.2s;
  }
  :hover::before {
    left: 0.5rem;
  }
  cursor: pointer;
`;
