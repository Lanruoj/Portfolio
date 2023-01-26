import styled from "styled-components";

const ContactDetails = styled.address`
  font-style: normal;
`;

const ContactLink = styled.a`
  text-decoration: none;
`;

export const Contact = () => {
  return (
    <ContactDetails>
      <h3>Email</h3>
      <ContactLink href="mailto:tanesamuelkaio@gmail.com">
        > tanesamuelkaio@gmail.com
      </ContactLink>
      <h3>Phone</h3>
      <ContactLink href="tel:+61466651820">> 0466651820</ContactLink>
    </ContactDetails>
  );
};
