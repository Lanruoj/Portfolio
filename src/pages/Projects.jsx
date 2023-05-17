import { Project } from "../components/Project";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { LocalLink } from "../components/LocalLink";

export const Projects = () => {
  return (
    <>
      <Header>Projects</Header>
      <Wrapper>
        <Project
          heading={"Portfolio"}
          stack={"JavaScript / React / React Router / Netlify"}
          text={
            "A revised portfolio website utilising `React`, `react-router-dom`, `styled-components` & dynamic rendering to create a single-page application"
          }
          link={"https://github.com/Lanruoj/Portfolio"}
        />
        <Project
          heading={"Mental Health Journal API"}
          stack={
            "JavaScript / Express / Mongoose / MongoDB / JSONWebToken / Bcrypt / Helmet"
          }
          text={
            "An API that allows users to post their daily mood and mental health report, with the ability to share amongst approved friends"
          }
          link={"https://github.com/Lanruoj/Mental-Health-Journal-API"}
        />
        <Project
          heading={"Gig Guide API"}
          stack={
            "Python / Flask / SQLALchemy / Marshmallow / PostgreSQL / PyJWT /Bcrypt"
          }
          text={
            "An API that allows users to post gigs and watch artists and venues for upcoming shows"
          }
          link={"https://github.com/Lanruoj/Gig-Guide-Webserver-API?"}
        />
        <Project
          heading={"Task Manager"}
          stack={"Python / Bash"}
          text={
            "A to-do list CLI application where you can add tasks with an optional deadline time, mark tasks as done, delete tasks, view completed tasks and more"
          }
          link={"https://github.com/Lanruoj/Tracks-Task-Manager?"}
        />
        <Project
          heading={"Portfolio (old)"}
          stack={"HTML / CSS / SCSS"}
          text={
            "My portfolio site using purely HTML & CSS/SCSS built during my first few months of learning to code"
          }
          link={"https://github.com/Lanruoj/Lanruoj.github.io?"}
        />
      </Wrapper>
      <LocalLink to={"/contact"} text={"Contact"} />
    </>
  );
};
