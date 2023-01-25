import { Project } from "../components/Project";
import { Header } from "../components/Header";

export const Projects = () => {
  return (
    <>
      <Header>Projects</Header>
      <Project
        heading={"Gig Guide API"}
        img={require("../img/gigs.png")}
        text={
          "An API that allows users to post gigs and watch artists and venues for upcoming shows"
        }
      />
    </>
  );
};
