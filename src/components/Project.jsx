import styled from "styled-components";

const ProjectContainer = styled.article`
  /* background-color: red; */
  border-radius: 1rem;
  padding: 1rem;
`;

const ProjectImage = styled.img`
  max-width: 90%;
`;

export const Project = (props) => {
  return (
    <ProjectContainer>
      <h3>Portfolio</h3>
      <p>
        uifsdgjh nuijroeinfh jrojnfg dfuhigewn hreguirejhfn iuehguidh rgbduiorj
        hfiehgu fbwiuegheruifbiqw ujhfbwdj iubfu iwebrfsadhdfs yiuhiyughfuie
        buifv
      </p>
      <ProjectImage src={require("../img/portrait-cropped.jpeg")} />
    </ProjectContainer>
  );
};
