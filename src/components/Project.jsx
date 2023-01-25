import styled from "styled-components";
import { ExternalLink } from "./ExternalLink";

const ProjectContainer = styled.article`
  /* background-color: red; */
  border-radius: 1rem;
  padding: 1rem;
`;

const ProjectImage = styled.img`
  max-width: 90%;
`;

const ProjectHeading = styled.h3`
  font-family: "Spline Sans Mono", monospace;
`;

export const Project = (props) => {
  return (
    <ProjectContainer>
      <ProjectHeading>{props.heading}</ProjectHeading>
      <p>{props.text}</p>
      <ProjectImage src={props.img} />
      <ExternalLink
        to="https://github.com/Lanruoj/Gig-Guide-Webserver-API?"
        target="_blank"
        text="GitHub"
      />
    </ProjectContainer>
  );
};
