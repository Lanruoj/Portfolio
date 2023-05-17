import styled from "styled-components";

export const Project = (props) => {
  return (
    <ProjectContainer>
      <div>
        <ProjectHeading>
          <GitHubLink href={props.link} target="_blank">
            🔗 {props.heading}
          </GitHubLink>
        </ProjectHeading>
        <TechStack>{props.stack}</TechStack>
        <ProjectParagraph>{props.text}</ProjectParagraph>
      </div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border-radius: 1rem;
  padding-top: 1rem;
  height: 8rem;
  max-width: 400px;
`;

const ProjectHeading = styled.h3`
  font-family: "Spline Sans Mono", monospace;
`;

const TechStack = styled.p`
  font-family: "Spline Sans Mono", monospace;
  font-size: 0.8rem;
`;

const ProjectParagraph = styled.p``;

const GitHubLink = styled.a`
  color: black;
  text-decoration: none;
`;
