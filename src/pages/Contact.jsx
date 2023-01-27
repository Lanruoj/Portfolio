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

const SubmitButton = styled.button`
  display: inline-block;
  padding: 0 1rem 1rem 1rem;
  margin-top: 0;
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-align: center;
  font-style: italic;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  ::before {
    content: ">\u00A0";
    text-decoration: underline;
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
              <SubmitButton type="submit">Send</SubmitButton>
            </div>
          </EmailForm>
        </ContactDetails>
      </Wrapper>
    </>
  );
};
