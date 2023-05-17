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
            Hello! I'm Tāne and I'm a 27 year old Māori Australian software
            engineer currently based in the lush surroundings of the foothills
            of the Dandenong Ranges in Melbourne, Victoria.
            <br />
            <br />
            Currently participating in an internship program with flagship
            whitegoods e-commerce company Winning Group, I am eagerly awaiting
            an opportunity to take the next step in my professional development
            and offer my skills, attitude and personality to the technology
            industry.
            <br />
            <br />
            As a recent graduate of Web Development at Coder Academy I spend
            most of my time learning and practising code, sharpening my problem
            solving skills and learning more about the world of technology.
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
