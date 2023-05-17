import styled from "styled-components";
import { useWindowSizeContext } from "../utils/WindowSizeContext";
import githubLogo from "../img/github-mark.png";

export const Project = (props) => {
  const { windowSize } = useWindowSizeContext();
  return (
    <ProjectContainer>
      <ProjectHeading>{props.heading}</ProjectHeading>
      <TechStack>{props.stack}</TechStack>
      <ProjectParagraph>{props.text}</ProjectParagraph>
      <a href={props.link} target="_blank" rel="noreferrer">
        <GithubLogo src={githubLogo} windowSize={windowSize} />
      </a>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  text-align: center;
  border-radius: 1rem;
  padding: 1rem;
  max-width: 400px;
`;

const GithubLogo = styled.img`
  margin: 1rem;
  width: 50px;
`;

const ProjectHeading = styled.h3`
  font-family: "Spline Sans Mono", monospace;
`;

const TechStack = styled.p`
  font-family: "Spline Sans Mono", monospace;
  font-size: 0.8rem;
`;

const ProjectParagraph = styled.p``;
