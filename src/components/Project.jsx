import styled from "styled-components";
import { useWindowSizeContext } from "../utils/WindowSizeContext";
import githubLogo from "../img/github-mark.png";

export const Project = (props) => {
  const { windowSize } = useWindowSizeContext();
  return (
    <ProjectContainer>
      <ProjectHeading>{props.heading}</ProjectHeading>
      <ProjectParagraph>{props.text}</ProjectParagraph>
      <a href={props.link} target="_blank" rel="noreferrer">
        <GithubLogo src={githubLogo} windowSize={windowSize} />
      </a>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  border-radius: 1rem;
  padding-top: 1rem;
`;

const GithubLogo = styled.img`
  margin: 1rem;
  width: 50px;
`;

const ProjectHeading = styled.h3`
  font-family: "Spline Sans Mono", monospace;
`;

const ProjectParagraph = styled.p`
  max-width: 400px;
`;
