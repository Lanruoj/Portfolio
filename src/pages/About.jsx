import { Header } from "../components/Header";
import { Portrait } from "../components/styled/Portrait";

export const About = () => {
  return (
    <>
      <Header>Who am I?</Header>
      <Portrait src={require("../img/portrait-cropped.jpeg")} />
      <p>
        Hello! I'm Tāne <i>(pronounced Tah-nay)</i> and I'm a 27 year old
        currently based in the lush surroundings of the foothills of the
        Dandenong Ranges in Melbourne, Victoria. As a student of Web Development
        at Coder Academy I spend most of my time learning and practising code,
        sharpening my problem solving skills and learning more about the world
        of tech. My adventure into the world of coding may not have started long
        ago, however I've already learned an immense amount of valuable
        practical lessons and industry specific knowledge.
      </p>
    </>
  );
};
