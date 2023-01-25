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
    </>
  );
};
