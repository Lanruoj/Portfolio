import styled from "styled-components";
import { ExternalLink } from "./ExternalLink";
import { LargeParagraph } from "./styled/LargeParagraph";

const ProjectContainer = styled.div`
  border-radius: 1rem;
  padding: 1rem;
`;

const ProjectImage = styled.img`
  max-width: 400px;
  border-radius: 1rem;
  margin: 0.5rem;
`;

const ProjectHeading = styled.h3`
  font-family: "Spline Sans Mono", monospace;
`;

const ProjectParagraph = styled.p`
  max-width: 400px;
`;

export const Project = (props) => {
  return (
    <ProjectContainer>
      <ProjectHeading>{props.heading}</ProjectHeading>
      <ProjectParagraph>{props.text}</ProjectParagraph>
      <a href={props.link} target="_blank">
        <ProjectImage src={props.img} />
      </a>
      <ExternalLink to={props.link} text="GitHub" />
    </ProjectContainer>
  );
};
