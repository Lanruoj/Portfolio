import { Project } from "../components/Project";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

export const Projects = () => {
  return (
    <>
      <Header>Projects</Header>
      <Wrapper>
        <Project
          heading={"Gig Guide API"}
          img={require("../img/gigs.png")}
          text={
            "An API that allows users to post gigs and watch artists and venues for upcoming shows"
          }
          link={"https://github.com/Lanruoj/Gig-Guide-Webserver-API?"}
        />
        <Project
          heading={"Task Manager"}
          img={require("../img/todo_scr.png")}
          text={
            "A to-do list CLI application where you can add tasks with an optional deadline time, mark tasks as done, delete tasks, view completed tasks and more"
          }
          link={"https://github.com/Lanruoj/Tracks-Task-Manager?"}
        />
        <Project
          heading={"Portfolio (old)"}
          img={require("../img/portfolio-scr.png")}
          text={
            "My portfolio site using purely HTML & CSS/SCSS built during my first few months of learning to code"
          }
          link={"https://github.com/Lanruoj/Lanruoj.github.io?"}
        />
      </Wrapper>
    </>
  );
};
