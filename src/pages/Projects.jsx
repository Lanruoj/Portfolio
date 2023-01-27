import { Project } from "../components/Project";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

export const Projects = () => {
  return (
    <>
      <Header>Projects</Header>
      <Wrapper>
        <Project
          heading={"Mental Health Journal API"}
          text={
            "An API that allows users to post their daily mood and mental health report, with the ability to share amongst approved friends"
          }
          link={"https://github.com/Lanruoj/Mental-Health-Journal-API"}
        />
        <Project
          heading={"Gig Guide API"}
          text={
            "An API that allows users to post gigs and watch artists and venues for upcoming shows"
          }
          link={"https://github.com/Lanruoj/Gig-Guide-Webserver-API?"}
        />
        <Project
          heading={"Task Manager"}
          text={
            "A to-do list CLI application where you can add tasks with an optional deadline time, mark tasks as done, delete tasks, view completed tasks and more"
          }
          link={"https://github.com/Lanruoj/Tracks-Task-Manager?"}
        />
        <Project
          heading={"Portfolio (old)"}
          text={
            "My portfolio site using purely HTML & CSS/SCSS built during my first few months of learning to code"
          }
          link={"https://github.com/Lanruoj/Lanruoj.github.io?"}
        />
      </Wrapper>
    </>
  );
};
