import { Header } from "../components/Header";
import { Portrait } from "../components/Portrait";
import { LocalLink } from "../components/LocalLink";
import { LargeParagraph } from "../components/styled/LargeParagraph";
import { Wrapper } from "../components/Wrapper";

export const About = () => {
  return (
    <>
      <Header>Who am I?</Header>
      <Wrapper>
        <Portrait />
        <article>
          <LargeParagraph>
            Hello!
            <br /> I'm Tāne and I'm a 27 year old web developer currently based
            in the lush surroundings of the foothills of the Dandenong Ranges in
            Melbourne, Victoria. As a student of Web Development at Coder
            Academy I spend most of my time learning and practising code,
            sharpening my problem solving skills and learning more about the
            world of technology. My adventure into the land of coding may not
            have started long ago, however I've already learned an immense
            amount of valuable practical lessons and industry specific knowledge
            which I can't wait to apply to the real world.
          </LargeParagraph>
          <LocalLink to={"/projects"} text={"Projects"} />
        </article>
      </Wrapper>
    </>
  );
};
