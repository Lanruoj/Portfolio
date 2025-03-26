import { Header } from "../components/Header";
import { Portrait } from "../components/Portrait";
import { LocalLink } from "../components/LocalLink";
import { LargeParagraph } from "../components/styled/LargeParagraph";
import { Wrapper } from "../components/Wrapper";
import { Overview } from "../pages/Overview";

export const About = () => {
  return (
    <>
      <Header>Who am I?</Header>
      <Wrapper>
        <Portrait />
        <article>
          <LargeParagraph>
            Hello! I'm Tāne and I'm a 29 year old Māori Australian Full Stack
            Web Developer currently based in Abbotsford, Melbourne, Victoria.
            <br />
            <br />
            I recently participated in a four month internship program with
            flagship whitegoods e-commerce company Winning Group and I am
            eagerly awaiting an opportunity to take the next step in my
            professional development and offer my skills, attitude and
            personality to the technology industry.
            <br />
            <br />
            In 2023 I graduated with a diploma of IT in Full Stack Web
            Development at Coder Academy where I learned the foundations of web
            development and developed a sincere passion for software engineering
            as a whole. We built front-end interfaces using HTML & CSS as well
            as React/JavaScript, back-end APIs using Python and databases using
            PostgreSQL, as well as using Atlassian project management and
            thorough documentation. I spend most of my time learning and
            practising code, sharpening my problem solving skills and learning
            more about the world of technology.
            <br />
            <br />
            My adventure into the land of coding may not have started long ago,
            however I've already learned an immense amount of valuable practical
            lessons and industry specific knowledge which I can't wait to apply
            to the real world.
          </LargeParagraph>
        </article>
      </Wrapper>
      <Header>Overview</Header>
      <Wrapper>
        <Overview />
      </Wrapper>
      <LocalLink to={"/projects"} text={"Projects"} />
    </>
  );
};
